from app.models import db, environment, SCHEMA, Product
from sqlalchemy.sql import text
from datetime import datetime

# Adds a demo user, you can add other users here if you want
def seed_products():
    product1 = Product(
        ownerId=1, name='Mini iPhones - Little Fingers' , price=12.95, description='This is the description for the first product', quantity=10, category='Toys')
    product2 = Product(
        ownerId=2, name='Tiny Water Bottles' , price=11.95, description='This is the description for the second product', quantity=5, category='Gifts')
    product3 = Product(
        ownerId=3, name='Small Refrigerator w/ lights' , price=10.95, description='This is the description for the third product', quantity=1, category='Home')
    product4 = Product(
        ownerId=1, name='Minature Fruit Varieties' , price=9.95, description='This is the description for the third product', quantity=4, category='Craft')
    product5 = Product(
        ownerId=2, name='Tiny Pouncing Kitten' , price=8.95, description='This is the description for the fourth product', quantity=10, category='Toys')
    product6 = Product(
        ownerId=3, name='Mini Camera Keychain' , price=7.95, description='This is the description for the third product', quantity=12, category='Gift')
    product7 = Product(
        ownerId=1, name='Fancy Plastic Hangers' , price=6.95, description='This is the description for the third product', quantity=20, category='Home')
    product8 = Product(
        ownerId=2, name='Mini Food Brands' , price=15.95, description='This is the description for the third product', quantity=15, category='Art')

    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.add(product7)
    db.session.add(product8)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()

#need to have one of these undo commands for each seeded table, just replace undo_users with products, etc.
