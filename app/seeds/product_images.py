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
    product_image13 = ProductImage(
        productId=13, image='https://i.etsystatic.com/7413290/r/il/04ad39/2712815747/il_1140xN.2712815747_s2ah.jpg')
    product_image14 = ProductImage(
        productId=14, image='https://i.etsystatic.com/7181882/r/il/e5a72c/3687424011/il_1140xN.3687424011_8s69.jpg')
    product_image15 = ProductImage(
        productId=15, image='https://i.etsystatic.com/7181882/r/il/a10610/4300441240/il_1140xN.4300441240_edeg.jpg')
    product_image16 = ProductImage(
        productId=16, image='https://i.etsystatic.com/35225285/r/il/0df088/3929227989/il_1140xN.3929227989_k4vb.jpg')
    product_image17 = ProductImage(
        productId=17, image='https://i.etsystatic.com/18844657/r/il/60c1d0/2346083100/il_1140xN.2346083100_i5oz.jpg')
    product_image18 = ProductImage(
        productId=18, image='https://i.etsystatic.com/18822384/r/il/2e1bbd/4340594825/il_1140xN.4340594825_jhhq.jpg')
    product_image19 = ProductImage(
        productId=19, image='https://i.etsystatic.com/24753587/r/il/cdc843/4832547951/il_1140xN.4832547951_3ehc.jpg')
    product_image20 = ProductImage(
        productId=20, image='https://i.etsystatic.com/5465916/r/il/91a759/5407915709/il_1140xN.5407915709_ttzy.jpg')
    product_image21 = ProductImage(
        productId=21, image='https://i.etsystatic.com/16453374/r/il/b39ae3/3663889033/il_1140xN.3663889033_970c.jpg')
    product_image22 = ProductImage(
        productId=22, image='https://i.etsystatic.com/19438496/r/il/8b6e1f/4019879780/il_1140xN.4019879780_4rqp.jpg')
    product_image23 = ProductImage(
        productId=23, image='https://i.etsystatic.com/25240083/r/il/edf5f8/2823992891/il_1140xN.2823992891_ljns.jpg')
    product_image24 = ProductImage(
        productId=24, image='https://i.etsystatic.com/11738039/r/il/5dd72d/2841473364/il_1140xN.2841473364_j5ad.jpg')
    product_image25 = ProductImage(
        productId=25, image='https://i.etsystatic.com/10204022/r/il/656c6e/4601143021/il_1140xN.4601143021_3nrr.jpg')
    product_image26 = ProductImage(
        productId=26, image='https://i.etsystatic.com/8052491/r/il/6b45d5/2145021996/il_1140xN.2145021996_ceos.jpg')
    product_image27 = ProductImage(
        productId=27, image='https://i.etsystatic.com/24163884/r/il/be8156/3441215314/il_1140xN.3441215314_rany.jpg')
    product_image28 = ProductImage(
        productId=28, image='https://i.etsystatic.com/7636090/r/il/09f2a1/3660574989/il_1140xN.3660574989_fc75.jpg')
    product_image29 = ProductImage(
        productId=29, image='https://i.etsystatic.com/10733424/r/il/8cb7fb/2780053391/il_1140xN.2780053391_8145.jpg')
    product_image30 = ProductImage(
        productId=30, image='https://i.etsystatic.com/7181882/r/il/6cf38a/4526323554/il_1140xN.4526323554_48yn.jpg')
    product_image31 = ProductImage(
        productId=31, image='https://i.etsystatic.com/9619595/r/il/fd3864/4471554537/il_1140xN.4471554537_m810.jpg')

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
    db.session.add(product_image13)
    db.session.add(product_image14)
    db.session.add(product_image15)
    db.session.add(product_image16)
    db.session.add(product_image17)
    db.session.add(product_image18)
    db.session.add(product_image19)
    db.session.add(product_image20)
    db.session.add(product_image21)
    db.session.add(product_image22)
    db.session.add(product_image23)
    db.session.add(product_image24)
    db.session.add(product_image25)
    db.session.add(product_image26)
    db.session.add(product_image27)
    db.session.add(product_image28)
    db.session.add(product_image29)
    db.session.add(product_image30)
    db.session.add(product_image31)


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
