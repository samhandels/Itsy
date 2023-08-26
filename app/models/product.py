from .db import db, environment, SCHEMA, add_prefix_for_prod

class Product(db.Model):
    __tablename__ = 'products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    ownerId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(100), nullable=False)
    createdAt = db.Column(db.DateTime)
    updatedAt = db.Column(db.DateTime)

# relationship atrribute
    users = db.relationship("User", back_populates="products")
    favorites_lists = db.relationship("Favorite", back_populates="products", cascade="all, delete")
    reviews = db.relationship("Review", back_populates="products", cascade="all, delete")
    shopping_cart_items = db.relationship("ShoppingCartItems", back_populates="products", cascade="all, delete")
    product_images = db.relationship("ProductImage", back_populates="products", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.ownerId,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'quantity': self.quantity,
            'category': self.category,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt,
            'product_image': [product_images.id]
        }
