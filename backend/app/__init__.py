from flask import Flask
from flask_cors import CORS
from .config import Config
from .extensions import db, migrate, redis_client
from .routes import register_routes

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    redis_client.init_app(app)
    CORS(app, supports_credentials=True)

    # Register routes
    register_routes(app)

    return app

