from flask import Blueprint, request, jsonify, session
from app import db
from app.models.logs import BodyFatLog, CalorieLog, HealthParameter
from datetime import datetime

health_bp = Blueprint('health', __name__, url_prefix='/api/health')


@health_bp.route('/calculate/fat', methods=['POST'])
def calculate_fat():
    if not session.get('logged_in'):
        return jsonify({'error': 'Not logged in'}), 401

    data = request.json
    try:
        fat = round((float(data['waist']) + float(data['hips']) - float(data['neck'])) / float(data['height']) * 100, 2)
    except:
        fat = round((float(data['waist']) - float(data['neck'])) / float(data['height']) * 100, 2)

    log = BodyFatLog(
        user_id=session['user_id'],
        fat_percentage=fat,
        waist=data.get('waist'),
        hips=data.get('hips'),
        neck=data.get('neck'),
        height=data.get('height'),
        created_at=datetime.utcnow()
    )
    db.session.add(log)
    db.session.commit()

    return jsonify({'fat': fat})


@health_bp.route('/calculate/calories', methods=['POST'])
def calculate_calories():
    if not session.get('logged_in'):
        return jsonify({'error': 'Not logged in'}), 401

    data = request.json
    steps = int(data.get('steps', 0))
    time = float(data.get('time', 1))
    speed = round(steps / time, 2)
    fat_percentage = 20  # Placeholder
    calories = round((steps * fat_percentage * 0.0005), 2)

    log = CalorieLog(
        user_id=session['user_id'],
        steps=steps,
        time=time,
        speed=speed,
        calories=calories,
        day=datetime.utcnow().strftime('%Y-%m-%d'),
        created_at=datetime.utcnow()
    )
    db.session.add(log)
    db.session.commit()

    return jsonify({'speed': speed, 'calories': calories})


@health_bp.route('/save', methods=['POST'])
def save_health():
    if not session.get('logged_in'):
        return jsonify({'error': 'Not logged in'}), 401

    data = request.json
    log = HealthParameter(
        user_id=session['user_id'],
        pulse=data.get('pulse'),
        bp=data.get('bp'),
        sugar=data.get('sugar'),
        oxygen=data.get('oxygen'),
        temperature=data.get('temperature'),
        created_at=datetime.utcnow()
    )
    db.session.add(log)
    db.session.commit()

    return jsonify({'message': 'Health data saved'})

