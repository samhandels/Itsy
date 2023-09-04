from app.models import db, environment, SCHEMA, TransactionItems
from sqlalchemy.sql import text
from datetime import datetime

def seed_transaction_items():
    trans_item_1 = TransactionItems(
        transactionId = 1,
        productId = 3
    )
    trans_item_2 = TransactionItems(
        transactionId = 1,
        productId = 6
    )
    trans_item_3 = TransactionItems(
        transactionId = 1,
        productId = 9
    )
    trans_item_4 = TransactionItems(
        transactionId = 2,
        productId = 1
    )
    trans_item_5 = TransactionItems(
        transactionId = 2,
        productId = 4
    )
    trans_item_6 = TransactionItems(
        transactionId = 2,
        productId = 7
    )
    trans_item_7 = TransactionItems(
        transactionId = 2,
        productId = 10
    )
    trans_item_8 = TransactionItems(
        transactionId = 3,
        productId = 2
    )
    trans_item_9 = TransactionItems(
        transactionId = 3,
        productId = 5
    )
    trans_item_10 = TransactionItems(
        transactionId = 3,
        productId = 8
    )
    trans_item_11 = TransactionItems(
        transactionId = 3,
        productId = 11
    )
    trans_item_12 = TransactionItems(
        transactionId = 4,
        productId = 12
    )
    db.session.add(trans_item_1)
    db.session.add(trans_item_2)
    db.session.add(trans_item_3)
    db.session.add(trans_item_4)
    db.session.add(trans_item_5)
    db.session.add(trans_item_6)
    db.session.add(trans_item_7)
    db.session.add(trans_item_8)
    db.session.add(trans_item_9)
    db.session.add(trans_item_10)
    db.session.add(trans_item_11)
    db.session.add(trans_item_12)

    db.session.commit()

def undo_transaction_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.transaction_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM transaction_items"))

    db.session.commit()
