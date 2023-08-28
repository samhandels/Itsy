from app.models import db, environment, SCHEMA, ProductImage
from sqlalchemy.sql import text
from datetime import datetime

# Adds a demo user, you can add other users here if you want
def seed_product_images():
    product_image1 = ProductImage(
        productId=1, url='https://i.etsystatic.com/24879642/r/il/84b06b/4197773364/il_794xN.4197773364_560s.jpg')
    product_image2 = ProductImage(
        productId=2, url='https://i.etsystatic.com/16453374/r/il/5b06c1/3720713756/il_794xN.3720713756_tjnt.jpg')
    product_image3 = ProductImage(
        productId=3, url='https://i.etsystatic.com/45002849/r/il/38a572/5066251372/il_794xN.5066251372_7s1h.jpg')
    product_image4 = ProductImage(
        productId=4, url='https://i.etsystatic.com/16453374/r/il/75cabe/3985637731/il_794xN.3985637731_pps2.jpg' )

    db.session.add(product_image1)
    db.session.add(product_image2)
    db.session.add(product_image3)
    db.session.add(product_image4)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_product_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM product_images"))

    db.session.commit()

#need to have one of these undo commands for each seeded table, just replace undo_users with products, etc.
