from .db import db, environment, SCHEMA, add_prefix_for_prod

class ShoppingCart(db.Model):
    __tablename__ = 'shopping_carts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))

    # relationship atrribute
    users = db.relationship("User", back_populates="shopping_carts")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId
        }
