from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Import your models here so they register with SQLAlchemy
from .user import User
from .body_fat_log import BodyFatLog
from .calorie_log import CalorieLog
from .health_parameter import HealthParameter

