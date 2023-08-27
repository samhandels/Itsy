from .db import db, environment, SCHEMA, add_prefix_for_prod

class ShoppingCartItems(db.Model):
    __tablename__ = 'shopping_cart_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    shoppingCartId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("shopping_carts.id")))
    productId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")))

    # relationship atrribute
    shopping_carts = db.relationship("ShoppingCart", back_populates="shopping_cart_items")
    products = db.relationship("Product", back_populates="shopping_cart_items", lazy="joined", order_by="asc(Product.updatedAt)")

    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'shoppingCartId': self.shoppingCartId,
    #         'productId': self.productId,
    #         'product': {
    #             'ownerId': self.products.ownerId,
    #             'name': self.products.name,
    #             'price': self.products.price,
    #             'description': self.products.description,
    #             'quantity': self.products.quantity,
    #             'category': self.products.category
    #         }
    #     }
