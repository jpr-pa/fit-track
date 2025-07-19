import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

from app import create_app

# Create the Flask application instance
app = create_app()

# Optional: Set environment-level configuration (if needed)
# os.environ["FLASK_ENV"] = os.getenv("FLASK_ENV", "production")

