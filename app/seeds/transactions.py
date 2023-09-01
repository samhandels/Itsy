from app.models import db, environment, SCHEMA, Transactions
from sqlalchemy.sql import text
from datetime import datetime

def seed_transactions():
    trans1 = Transactions(
        userId = 1
    )
    trans2 = Transactions(
        userId = 2
    )
    trans3 = Transactions(
        userId = 3
    )
    trans4 = Transactions(
        userId = 4
    )

    db.session.add(trans1)
    db.session.add(trans2)
    db.session.add(trans3)
    db.session.add(trans4)
    db.session.commit()

def undo_transactions():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.transactions RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM transactions"))

    db.session.commit()
