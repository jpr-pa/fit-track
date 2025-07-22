from flask import Blueprint, request, jsonify, session
from app.utils.otp import generate_otp, verify_otp
from app.models.user import User
from app import db
from werkzeug.security import generate_password_hash

otp_bp = Blueprint("otp", __name__, url_prefix="/api/otp")


@otp_bp.route("/send", methods=["POST"])
def send_signup_otp():
    data = request.get_json()
    email = data.get("email")

    if not email:
        return jsonify({"error": "Email is required"}), 400

    otp = generate_otp(email, purpose="signup")
    if not otp:
        return jsonify({"error": "Failed to send OTP"}), 500

    print(f"[OTP] Signup OTP sent to {email}")
    return jsonify({"message": "OTP sent to email"}), 200


@otp_bp.route("/verify", methods=["POST"])
def verify_signup_otp():
    data = request.get_json()
    email = data.get("email")
    otp = data.get("otp")
    password = data.get("password")
    username = data.get("username")
    mobile = data.get("mobile")
    first_name = data.get("first_name")

    if not (email and otp and password):
        return jsonify({"error": "Missing fields"}), 400

    if not verify_otp(email, otp, purpose="signup"):
        return jsonify({"error": "Invalid OTP"}), 401

    if User.query.filter((User.email == email) | (User.username == username)).first():
        return jsonify({"error": "User already exists"}), 409

    new_user = User(
        email=email,
        username=username,
        mobile=mobile,
        first_name=first_name,
        password_hash=generate_password_hash(password),
    )
    db.session.add(new_user)
    db.session.commit()

    session["logged_in"] = True
    session["user_id"] = new_user.id
    session["user_name"] = new_user.first_name
    session["mobile"] = new_user.mobile

    return jsonify({"message": "Signup successful"}), 200


@otp_bp.route("/send_reset", methods=["POST"])
def send_forgot_otp():
    data = request.get_json()
    login = data.get("login")  # username or email

    if not login:
        return jsonify({"error": "Username or Email required"}), 400

    user = User.query.filter((User.email == login) | (User.username == login)).first()
    if not user:
        return jsonify({"error": "User not found"}), 404

    otp = generate_otp(user.email, purpose="reset")
    if not otp:
        return jsonify({"error": "Failed to send OTP"}), 500

    session["reset_email"] = user.email
    session["reset_user_id"] = user.id

    print(f"[OTP] Password reset OTP sent to {user.email}")
    return jsonify({"message": "OTP sent for password reset"}), 200


@otp_bp.route("/verify_reset", methods=["POST"])
def verify_forgot_otp():
    data = request.get_json()
    otp = data.get("otp")
    email = session.get("reset_email")

    if not email or not otp:
        return jsonify({"error": "Missing OTP or session expired"}), 400

    if verify_otp(email, otp, purpose="reset"):
        session["otp_verified"] = True
        return jsonify({"message": "OTP verified"}), 200
    else:
        return jsonify({"error": "Invalid OTP"}), 401
