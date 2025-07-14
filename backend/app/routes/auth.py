from flask import Blueprint, request, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash
from app.models.user import User
from app import db
from app.utils.otp_manager import generate_otp, verify_otp
from app.utils.email_utils import send_otp_email

auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')


@auth_bp.route('/send_signup_otp', methods=['POST'])
def send_signup_otp():
    email = request.json.get('email')
    if not email:
        return jsonify({'error': 'Email is required'}), 400

    otp = generate_otp(email)
    send_otp_email(email, otp, purpose='signup')
    return jsonify({'message': 'OTP sent to email'}), 200


@auth_bp.route('/verify_signup_otp', methods=['POST'])
def verify_signup_otp():
    data = request.json
    email = data.get('email')
    otp = data.get('otp')
    password = data.get('password')
    username = data.get('username')
    mobile = data.get('mobile')
    first_name = data.get('first_name')
    last_name = data.get('last_name', '')

    if not all([email, otp, password, username, mobile, first_name]):
        return jsonify({'error': 'Missing required fields'}), 400

    if not verify_otp(email, otp):
        return jsonify({'error': 'Invalid OTP'}), 400

    if User.query.filter((User.email == email) | (User.username == username) | (User.mobile == mobile)).first():
        return jsonify({'error': 'User already exists'}), 409

    password_hash = generate_password_hash(password)
    user = User(
        email=email,
        username=username,
        mobile=mobile,
        password_hash=password_hash,
        first_name=first_name,
        last_name=last_name
    )
    db.session.add(user)
    db.session.commit()

    session['user_id'] = user.id
    session['username'] = user.username
    session['logged_in'] = True

    return jsonify({'message': 'User registered successfully'}), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    login_id = data.get('login')
    password = data.get('password')

    if not login_id or not password:
        return jsonify({'error': 'Missing login or password'}), 400

    user = User.query.filter(
        (User.username == login_id) |
        (User.email == login_id) |
        (User.mobile == login_id)
    ).first()

    if user and check_password_hash(user.password_hash, password):
        session['user_id'] = user.id
        session['username'] = user.username
        session['logged_in'] = True
        return jsonify({'message': 'Login successful'}), 200

    return jsonify({'error': 'Invalid credentials'}), 401


@auth_bp.route('/logout', methods=['GET'])
def logout():
    session.clear()
    return jsonify({'message': 'Logged out successfully'}), 200

