from .db import db, environment, SCHEMA, add_prefix_for_prod


class Favorite(db.Model):
    __tablename__ = 'favorites_lists'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    productId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)

# relationship atrribute
    users = db.relationship("User", back_populates="favorites_lists")
    products = db.relationship("Product", back_populates="favorites_lists", lazy="joined")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'productId': self.productId,
            'product': {
                'name': self.products.name,
                'price': self.products.price,
                'image': [product_image.image for product_image in self.products.product_images],
                'id': self.products.id
            }
        }
