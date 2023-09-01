from app.models import db, environment, SCHEMA, TransactionItems
from sqlalchemy.sql import text
from datetime import datetime

def seed_transaction_items():
    trans_item_1 = TransactionItems(
        transactionId = 1,
        productId = 2
    )
    trans_item_2 = TransactionItems(
        transactionId = 1,
        productId = 3
    )
    trans_item_3 = TransactionItems(
        transactionId = 1,
        productId = 4
    )
    trans_item_4 = TransactionItems(
        transactionId = 1,
        productId = 5
    )
    trans_item_5 = TransactionItems(
        transactionId = 2,
        productId = 3
    )
    trans_item_6 = TransactionItems(
        transactionId = 3,
        productId = 2
    )
    trans_item_7 = TransactionItems(
        transactionId = 3,
        productId = 4
    )
    trans_item_8 = TransactionItems(
        transactionId = 4,
        productId = 3
    )
    db.session.add(trans_item_1)
    db.session.add(trans_item_2)
    db.session.add(trans_item_3)
    db.session.add(trans_item_4)
    db.session.add(trans_item_5)
    db.session.add(trans_item_6)
    db.session.add(trans_item_7)
    db.session.add(trans_item_8)

    db.session.commit()

def undo_transaction_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.transaction_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM transaction_items"))

    db.session.commit()
