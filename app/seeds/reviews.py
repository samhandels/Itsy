from app.models import db, environment, SCHEMA, Review
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review(
        productId = 1, userId = 2, review="Here is a review for product 1 by user 2", stars = 1
    )
    review2 = Review(
        productId = 2, userId = 3, review="Here is a review for product 2 by user 3", stars = 2
    )
    review3= Review(
        productId = 3, userId = 1, review="Here is a review for product 3 by user 1", stars = 3
    )
    review4= Review(
        productId = 4, userId = 2, review="Here is a review for product 4 by user 2", stars = 4
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
