import os
from dotenv import load_dotenv

# Load .env variables if available
load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'super-secret-key')
    SQLALCHEMY_DATABASE_URI = os.getenv('MYSQL_URI', 'mysql+pymysql://user:password@localhost/dbname')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    MONGO_URI = os.getenv('MONGO_URI', 'mongodb://localhost:27017/fittrack')
    REDIS_URL = os.getenv('REDIS_URL', 'redis://localhost:6379/0')

    FIREBASE_CREDENTIALS = os.getenv('FIREBASE_CREDENTIALS', './firebase/credentials.json')

    OTP_EXPIRY_SECONDS = 300  # 5 minutes

class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False

class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'

