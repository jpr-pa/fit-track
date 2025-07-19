import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

class Config:
    # Flask Secret Key
    SECRET_KEY = os.getenv('SECRET_KEY', 'fallback_super_secret_key')

    # MySQL Configuration
    MYSQL_HOST = os.getenv('MYSQL_HOST')
    MYSQL_USER = os.getenv('MYSQL_USER')
    MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD')
    MYSQL_DB = os.getenv('MYSQL_DB')
    MYSQL_PORT = int(os.getenv('MYSQL_PORT', 3306))

    # MongoDB Atlas URI
    MONGO_URI = os.getenv('MONGO_URI')

    # Optional: Mail (if you use Flask-Mail for OTP)
    MAIL_SERVER = os.getenv('MAIL_SERVER', 'smtp.gmail.com')
    MAIL_PORT = int(os.getenv('MAIL_PORT', 587))
    MAIL_USE_TLS = os.getenv('MAIL_USE_TLS', 'true').lower() == 'true'
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    MAIL_DEFAULT_SENDER = os.getenv('MAIL_DEFAULT_SENDER', MAIL_USERNAME)

