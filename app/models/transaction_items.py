from .db import db, environment, SCHEMA, add_prefix_for_prod

class TransactionItems(db.Model):
    __tablename__ = 'transaction_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key =True)
    productId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")))
    transactionId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("transactions.id")))
    quantity = db.Column(db.Integer)

    products = db.relationship("Product", back_populates="transaction_items")
    transactions = db.relationship("Transactions", back_populates="transaction_items")

    def to_dict(self):
        return {
            'id': self.id,
            'productId': self.productId,
            'transactionId': self.transactionId,
            'userId': self.transactions.userId,
            'price': self.products.price,
            'productName': self.products.name
        }
