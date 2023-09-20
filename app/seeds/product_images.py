from app.models import db, environment, SCHEMA, ProductImage
from sqlalchemy.sql import text
from datetime import datetime

# Adds a demo user, you can add other users here if you want
def seed_product_images():
    product_image1 = ProductImage(
        productId=1, image='https://i.etsystatic.com/24879642/r/il/84b06b/4197773364/il_794xN.4197773364_560s.jpg')
    product_image2 = ProductImage(
        productId=2, image='https://i.etsystatic.com/16453374/r/il/5b06c1/3720713756/il_794xN.3720713756_tjnt.jpg')
    product_image3 = ProductImage(
        productId=3, image='https://i.etsystatic.com/45002849/r/il/38a572/5066251372/il_794xN.5066251372_7s1h.jpg')
    product_image4 = ProductImage(
        productId=4, image='https://i.etsystatic.com/16453374/r/il/75cabe/3985637731/il_794xN.3985637731_pps2.jpg')
    product_image5 = ProductImage(
        productId=5, image='https://i.etsystatic.com/11939576/r/il/e66518/5004761948/il_794xN.5004761948_ahhh.jpg')
    product_image6 = ProductImage(
        productId=6, image='https://i.etsystatic.com/15038810/r/il/0606a5/4485261786/il_794xN.4485261786_8enj.jpg')
    product_image7 = ProductImage(
        productId=7, image='https://i.etsystatic.com/20257527/r/il/c9c63d/4070354997/il_794xN.4070354997_12rg.jpg')
    product_image8 = ProductImage(
        productId=8, image='https://i.etsystatic.com/36840965/r/il/50cf61/5028439116/il_794xN.5028439116_pvwx.jpg')
    product_image9 = ProductImage(
        productId=9, image='https://i.etsystatic.com/25893813/r/il/bc0d0e/5221317936/il_794xN.5221317936_t617.jpg')
    product_image10 = ProductImage(
        productId=10, image='https://i.etsystatic.com/5137977/r/il/18dfde/3940491217/il_794xN.3940491217_mb7d.jpg')
    product_image11 = ProductImage(
        productId=11, image='https://i.etsystatic.com/35070992/r/il/8e83d5/3820942979/il_794xN.3820942979_duu0.jpg')
    product_image12 = ProductImage(
        productId=12, image='https://i.etsystatic.com/7113657/r/il/ee5971/5186842061/il_794xN.5186842061_3iup.jpg')


    db.session.add(product_image1)
    db.session.add(product_image2)
    db.session.add(product_image3)
    db.session.add(product_image4)
    db.session.add(product_image5)
    db.session.add(product_image6)
    db.session.add(product_image7)
    db.session.add(product_image8)
    db.session.add(product_image9)
    db.session.add(product_image10)
    db.session.add(product_image11)
    db.session.add(product_image12)


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
