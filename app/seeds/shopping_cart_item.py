from app.models import db, ShoppingCartItems, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

#demo userId = 1, 2 products
#marnie userId = 2, 2 products
#bobbie userId = 3, 2 products

def seed_shopping_carts_items():
    demo_cart_item1 = ShoppingCartItems(shoppingCartId=1, productId=2)
    demo_cart_item2 = ShoppingCartItems(shoppingCartId=1, productId=3)
    marnie_cart_item1 = ShoppingCartItems(shoppingCartId=2, productId=1)
    marnie_cart_item2 = ShoppingCartItems(shoppingCartId=2, productId=3)
    bobbie_cart_item1 = ShoppingCartItems(shoppingCartId=3, productId=1)
    bobbie_cart_item2 = ShoppingCartItems(shoppingCartId=3, productId=2)

#add to db
    items = [demo_cart_item1, demo_cart_item2, marnie_cart_item1 ,marnie_cart_item2, bobbie_cart_item1, bobbie_cart_item2]
    add_items = [db.session.add(item) for item in items]
  
    db.session.commit()

    print("shopping cart items added to DB")



def undo_shopping_carts_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.shopping_cart_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM shopping_cart_items"))

    db.session.commit()
