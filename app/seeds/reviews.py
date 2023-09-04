from app.models import db, environment, SCHEMA, Review
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review(
        productId = 1, userId = 2, review="Here is a review for product 1 by user 2", stars = 1,
        likes = 0
    )
    review2 = Review(
        productId = 2, userId = 3, review="Here is a review for product 2 by user 3", stars = 2,
        likes = 0
    )
    review3= Review(
        productId = 3, userId = 1, review="Here is a review for product 3 by user 1", stars = 3,
        likes = 0
    )
    review4= Review(
        productId = 4, userId = 2, review="Here is a review for product 4 by user 2", stars = 4,
        likes = 0
    )
    review5= Review(
        productId = 5, userId = 3, review="Here is a review for product 5 by user 3", stars = 5,
        likes = 0
    )
    review6= Review(
        productId = 6, userId = 1, review="Here is a review for product 6 by user 1", stars = 4,
        likes = 0
    )
    review7= Review(
        productId = 7, userId = 2, review="Here is a review for product 7 by user 2", stars = 3,
        likes = 0
    )
    review8= Review(
        productId = 8, userId = 3, review="Here is a review for product 8 by user 3", stars = 2,
        likes = 0
    )
    review9= Review(
        productId = 9, userId = 1, review="Here is a review for product 9 by user 1", stars = 3,
        likes = 0
    )
    review10= Review(
        productId = 10, userId = 2, review="Here is a review for product 10 by user 2", stars = 4,
        likes = 0
    )
    review11= Review(
        productId = 11, userId = 3, review="Here is a review for product 11 by user 3", stars = 5,
        likes = 0
    )
    review12= Review(
        productId = 12, userId = 1, review="Here is a review for product 12 by user 1", stars = 1,
        likes = 0
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
