from app.models import db, ShoppingCartItems, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

#demo userId = 1
#marnie userId = 2
#bobbie userId = 3

def seed_shopping_carts():
    demo_cart_item1 = ShoppingCartItems(shoppingCartId=1, productId=1)
    demo_cart_item2 = ShoppingCartItems(shoppingCartId=1, productId=2)
    demo_cart_item3 = ShoppingCartItems(shoppingCartId=1, productId=3)
    marnie_cart_item1 = ShoppingCartItems(shoppingCartId=2, productId=1)
    marnie_cart_item2 = ShoppingCartItems(shoppingCartId=2, productId=2)
    bobbie_cart_item1 = ShoppingCartItems(shoppingCartId=3, productId=1)

#add to db
    items = [demo_cart_item1, demo_cart_item2, demo_cart_item3 ,marnie_cart_item1,marnie_cart_item2, bobbie_cart_item1]
    add_items = [db.session.add(item) for item in items]
  
    db.session.commit()

    print("shopping cart items added to DB")



def undo_shopping_carts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM shopping_cart_items"))

    db.session.commit()
