import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_USERNAME = os.getenv("SMTP_USERNAME", "your_email@gmail.com")  # Replace or use env var
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "your_app_password")     # Replace or use env var
FROM_EMAIL = SMTP_USERNAME


def send_otp_email(recipient, otp, purpose="signup"):
    subject = "Your FitTrack OTP"

    if purpose == "signup":
        body = f"""
        Hi there,

        Welcome to FitTrack! Your OTP for account signup is:

        OTP: {otp}

        Please do not share this OTP with anyone.

        Regards,
        FitTrack Team
        """
    elif purpose == "reset":
        body = f"""
        Hi there,

        You requested to recover your FitTrack password. Your OTP is:

        OTP: {otp}

        Please use this OTP to reset your password. Do not share it with anyone.

        Regards,
        FitTrack Team
        """
    else:
        body = f"Your OTP is: {otp}"

    message = MIMEMultipart()
    message["From"] = FROM_EMAIL
    message["To"] = recipient
    message["Subject"] = subject
    message.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.send_message(message)
        print(f"[EMAIL OTP] Sent to {recipient}: {otp}")
        return True
    except Exception as e:
        print(f"[EMAIL ERROR] Failed to send OTP to {recipient}: {str(e)}")
        return False

