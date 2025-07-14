from werkzeug.security import generate_password_hash, check_password_hash

def hash_password(password: str) -> str:
    """Generate a secure hash for the password."""
    return generate_password_hash(password)

def verify_password(password: str, password_hash: str) -> bool:
    """Verify that a password matches the stored hash."""
    return check_password_hash(password_hash, password)

