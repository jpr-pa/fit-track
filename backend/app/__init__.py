import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from pymongo import MongoClient
from flask_mysqldb import MySQL

load_dotenv()

mysql = MySQL()
mongo_client = None
mongo_db = None

def create_app():
    global mongo_client, mongo_db

    app = Flask(__name__)
    CORS(app)

    # App Secret
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY", "fallback-secret")

    # MySQL Configuration
    app.config['MYSQL_HOST'] = os.getenv("MYSQL_HOST")
    app.config['MYSQL_USER'] = os.getenv("MYSQL_USER")
    app.config['MYSQL_PASSWORD'] = os.getenv("MYSQL_PASSWORD")
    app.config['MYSQL_DB'] = os.getenv("MYSQL_DB")

    mysql.init_app(app)

    # MongoDB Configuration
    mongo_uri = os.getenv("MONGO_URI")
    mongo_db_name = os.getenv("MONGO_DB_NAME", "fittrack")
    mongo_client = MongoClient(mongo_uri)
    mongo_db = mongo_client[mongo_db_name]

    return app

