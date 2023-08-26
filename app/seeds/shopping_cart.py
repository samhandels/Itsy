from app.models import db, ShoppingCart, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

#demo userId = 1
#marnie userId = 2
#bobbie userId = 3

def seed_shopping_carts():
    demo_cart = ShoppingCart(userId=1)
    marnie_cart = ShoppingCart(userId=2)
    bobbie_cart = ShoppingCart(userId=3)

#add to db
    carts = [demo_cart, marnie_cart, bobbie_cart]
    add_carts = [db.session.add(cart) for cart in carts]
  
    db.session.commit()

    print("shopping cart added to DB")



def undo_shopping_carts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM shopping_carts"))

    db.session.commit()
