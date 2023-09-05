# Itsy
   ![Screenshot 2023-09-04 at 3 53 53 PM](https://github.com/samhandels/Itsy/assets/123411173/2c3fd80e-989b-49b5-a242-3c522f1f9254)

- [LIVE LINK TO ITSY](https://itsy-5lnl.onrender.com/)

Itsy is a clone of Etsy, an online ecommerce website for sellers of all sizes. Users may create their own webstores, list products for sale, favorite products, leave reviews and more.

For more details of our current features, visit our wiki page:

- [Feature List](https://github.com/samhandels/Itsy/wiki/Feature_List)
- [Schema](https://github.com/samhandels/Itsy/wiki/Schema)
- [User Stories](https://github.com/samhandels/Itsy/wiki/User-Stories)

# Product Detail Page with Reviews
![Screenshot 2023-09-04 at 4 54 24 PM](https://github.com/samhandels/Itsy/assets/123411173/6b96fe8a-a0fd-4f55-ab54-1eb9a90e3806)

# Shopping Cart Page
![Screenshot 2023-09-04 at 4 56 35 PM](https://github.com/samhandels/Itsy/assets/123411173/f8739491-0814-4cab-a2c8-0676a5a680e8)

# Favorites Page
![Screenshot 2023-09-04 at 4 57 20 PM](https://github.com/samhandels/Itsy/assets/123411173/7155bd62-fd01-4b35-abb0-81a542927a13)


# Technologies Used
Frontend
- Javascript, React, Redux, HTML, CSS

Backend
- Python, Flask, SQLAlchemy


# Features
While using Itys, users can:
- Create an account and login, or sign in with a demo user.
- View a landing page of sample products on the itsy website.
- Create, read, update, and delete your own sample products.
- Create, read, update, and delete reviews on products.
- Add and delete to your favorites list.
- Add and modify products in your shopping cart.
- Search for products by name, category or description in the searchbar.

# Endpoints
| Request | Purpose |
| --- | --- |
| GET / | Navigate to the Itsy Homepage, and view our products and information |
| GET /products/<:id> | View a product detail page, see the information related to that individual product. |
| GET /products/<:id>/reviews | Query for reviews by product id |
| GET /favorites | View all favorites by specific user, if not logged in, redirects to login page |
| GET /logout | Logs out a user |
| GET /unauthorized | Returns unauthorized JSON when flask-login authentication fails |
| GET /reviews/<:id> | Query for reviews by id |
| GET /reviews | Query for all reviews by user id |
| GET /shopping_cart/current | Query for all shopping_cart_items and returns them in a list of shopping_cart dictionaries with the current user |
| POST /login | Logs in Authenticated user |
| POST /signup | Creates a new user and logs them in |
| POST /products/new | Creates a new product by id |
| POST /products/update/<:id> | Updates a product by id |
| POST /products/<:id>/shopping_cart | Create a shopping cart item to the shopping cart from the product detail page |
| POST /products/<:id>/favorites | Adds a product to your favorites |
| PUT /reviews/<:id> | Post new review for product by product id |
| DELETE /products/delete/<:id> | Deletes a product by id if you are the owner of the product |
| DELETE /products/<:id>/favorites | Removes a product from your favorites |
| DELETE /reviews/<:id> | Delete a review by review id |
| DELETE /shopping_cart/<:id> | Clicking X remove an item in shopping cart, clicking Order Up clears product from shopping cart, |


# Future Goals
- AWS Image integration for uploading photos of products
- Chat feature, users can chat with product owners
- Make Itsy mobile friendly
- Multiple product images per product detail page

# Contact Us
| Aila Lu | Juvenal Burguillos | Sam Handelsman | Erica Zimmerman |
| --- | --- | --- | --- |
| [Github](https://github.com/AilaLu) | [Github](https://github.com/juvie3) | [Github](https://github.com/samhandels) | [Github](https://github.com/ez111640) |
| [LinkedIn](https://www.linkedin.com/in/ailalutw/) | [LinkedIn](https://www.linkedin.com/in/juvenal-burguillos-b550041ba/) | [LinkedIn](https://www.linkedin.com/in/sam-handelsman/) | [LinkedIn](https://www.linkedin.com/in/erica-zimmerman-15168a28a/) |

