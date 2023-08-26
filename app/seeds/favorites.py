from app.models import db, environment, SCHEMA, Favorite
from sqlalchemy.sql import text
from datetime import datetime

def seed_favorites():
    favorite1 = Favorite(
        userId = 1, productId = 3
    )
    favorite2 = Favorite(
        userId = 2, productId = 1
    )
    favorite3 = Favorite(
        userId = 3, productId = 2
    )

    db.session.add(favorite1)
    db.session.add(favorite2)
    db.session.add(favorite3)
    db.session.commit()

def undo_favorites():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.favorites RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM favorites"))

    db.session.commit()
