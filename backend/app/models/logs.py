from datetime import datetime
from . import db


class BodyFatLog(db.Model):
    __tablename__ = 'body_fat_logs'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    waist = db.Column(db.Float, nullable=False)
    hips = db.Column(db.Float)
    neck = db.Column(db.Float, nullable=False)
    height = db.Column(db.Float, nullable=False)
    fat_percentage = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class CalorieLog(db.Model):
    __tablename__ = 'calorie_logs'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    steps = db.Column(db.Integer, nullable=False)
    time = db.Column(db.Float, nullable=False)
    speed = db.Column(db.Float, nullable=False)
    calories = db.Column(db.Float, nullable=False)
    day = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class HealthParameter(db.Model):
    __tablename__ = 'health_parameters'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    sleep = db.Column(db.Float)
    hydration = db.Column(db.Float)
    heart_rate = db.Column(db.Float)
    stress_level = db.Column(db.String(100))
    notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

