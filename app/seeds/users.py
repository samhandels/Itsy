from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        firstName='Demo', lastName='User' , username='Demo', email='demo@aa.io', password='password', createdAt=datetime.now(), updatedAt=datetime.now())
    marnie = User(
        firstName='Marnie', lastName='User', username='Marnie', email='marnie@aa.io', password='password', createdAt=datetime.now(), updatedAt=datetime.now())
    bobbie = User(
        firstName='Bobbie', lastName='User', username='Bobbie', email='bobbie@aa.io', password='password', createdAt=datetime.now(), updatedAt=datetime.now())

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()

#need to have one of these undo commands for each seeded table, just replace undo_users with products, etc.
