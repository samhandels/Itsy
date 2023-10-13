from app.models import db, environment, SCHEMA, Product
from sqlalchemy.sql import text
from datetime import datetime

# Adds a demo user, you can add other users here if you want
def seed_products():
    product1 = Product(
        ownerId=1, name='Mini iPhones - Tiny Fingers' , price=12.95, description='Mini Iphones! Great for those who are looking to size down on electronics!', quantity=10, category='Toys')
    product2 = Product(
        ownerId=2, name='Tiny Water Bottles' , price=11.95, description='Tiny water bottles! The perfect refreshment for your miniature guests!', quantity=5, category='Gifts')
    product3 = Product(
        ownerId=3, name='Small Refrigerator w/ lights' , price=10.95, description='A small refrigerator, not actually functional but awesome for a miniature display piece', quantity=1, category='Home')
    product4 = Product(
        ownerId=1, name='Minature Fruit Varieties' , price=9.95, description='Miniature fruit! perfect for display, keep in a cool environment', quantity=4, category='Craft')
    product5 = Product(
        ownerId=2, name='Tiny Pouncing Kitten' , price=8.95, description='A tiny kitten figurine, perfect for displaying in your home', quantity=10, category='Toys')
    product6 = Product(
        ownerId=3, name='Mini Camera Keychain' , price=7.95, description='A small camera, complete with flash and polaroid picture capability', quantity=12, category='Gifts')
    product7 = Product(
        ownerId=1, name='Fancy Plastic Hangers' , price=6.95, description='Tiny hangers to hang up clothes', quantity=20, category='Home')
    product8 = Product(
        ownerId=2, name='Mini Food Brands' , price=15.95, description='Tiny products from popular food brands', quantity=15, category='Art')
    product9 = Product(
        ownerId=3, name='Tiny Lotus Stud Earrings' , price=20.99, description='Beautiful Lotus Earrings, they are 14k solid gold', quantity=12, category='Jewelry')
    product10 = Product(
        ownerId=1, name='Tiny Knit Cardigans' , price=25.55, description='Tiny outerwear! Perfect for keeping your miniature friends warm!', quantity=12, category='Clothing')
    product11 = Product(
        ownerId=2, name='Tiny Sleepwear' , price=10.99, description='Tiny sleepwear, perfect for bedtime', quantity=11, category='Clothing')
    product12 = Product(
        ownerId=3, name='Tiny Wedding Day Couple' , price=15.99, description='Tiny Wedding Figurines, a great piece to add to your special day.', quantity=15, category='Wedding')
    product13 = Product(
        ownerId=2, name='Miniature Chess Set' , price=34.99, description='This luxury Personalised Chess gift set is the perfect gift for any avid chess player, it comes to you in a stunning rosewood box', quantity=15, category='Toys')
    product14 = Product(
        ownerId=1, name='Miniature Wedding Cake' , price=12.99, description='This beautiful miniature wedding cake is sure to be the perfect addition to your miniature fairy garden or dollhouse. The 3 tier cake is decorated with lovely little flowers. It sits on a pretty blue base. Made of resin.', quantity=10, category='Wedding')
    product15 = Product(
        ownerId=2, name='Miniature Margarita Cocktail' , price=10.99, description='A wonderful handmade miniature margarita! Add one or two of these to your dollhouse, miniature beach scene, fairy garden or coastal wedding cake topper. It has a salted rim and is garnished with a teeny tiny polymer clay lime slice.', quantity=16, category='Art')
    product16 = Product(
        ownerId=3, name='Doll sized Porcelain Tea Set' , price=19.99, description='Enjoy our Miniature Doll sized Tea Set, perfect for any occasion!', quantity=17, category='Home')
    product17 = Product(
        ownerId=2, name='Miniature Turtle/Fish Bowl' , price=25.99, description='Here is a tiny bowl with a tiny resin turtle! Perfect for your doll house or makes the cutest fake tiny pet ever. It comes in a plastic box with a bow.', quantity=15, category='Craft')
    product18 = Product(
        ownerId=1, name='Miniature Money' , price=5.99, description='Miniature Sized USD, Not For Actual Use!', quantity=25, category='Gifts')
    product19 = Product(
        ownerId=2, name='Tiny Crocs' , price=5.99, description='A cute miniature pair of crocs, they are hand made and hand painted, each purchase comes with 5 colors.', quantity=25, category='Clothing')
    product20 = Product(
        ownerId=3, name='Dollhouse Books' , price=17.99, description='Mini Antique Books, comes with a kit to further create more books as well', quantity=15, category='Home')
    product21 = Product(
        ownerId=1, name='8pc Breakfast Food and Drink Miniature Lot' , price=5.99, description='8pc Breakfast Food and Drink Miniature Lot. You will receive 8 pieces of miniature breakfast items - 2 drinks and 6 food items.', quantity=10, category='Craft')
    product22 = Product(
        ownerId=2, name='Horror Classics Miniature DVD Set - 4 Movies' , price=15.00, description='This is a set of 4 miniature Horror Classic DVDs in 1:12 scale. The Shining, The Exorcist, The Texas Chainsaw Massacre, Jaws', quantity=14, category='Art')
    product23 = Product(
        ownerId=3, name='Tiny Wedding Gifts' , price=10.99, description='Tiny wedding gift packages and bags, perfect to gift your tiny friends!', quantity=12, category='Wedding')
    product24 = Product(
        ownerId=1, name='Tiny Micro Diamond Earrings' , price=35.99, description='Super small micro crystal diamond earring / nose stud 1,2 mm 1,7 mm', quantity=15, category='Jewelry')
    product25 = Product(
        ownerId=2, name='Opal Inlay Earrings' , price=25.99, description='Stack our Opal Inlay Hoops with your everyday jewelry pieces to add a sparkle of color and uniqueness. With our three different opal colors', quantity=13, category='Jewelry')
    product26 = Product(
        ownerId=3, name='Miniature Dollhouse Table Set' , price=17.99, description='miniature dollhouse kitchen table 1/12 scale', quantity=15, category='Home')
    product27 = Product(
        ownerId=1, name='Miniature Nutcracker' , price=5.99, description='These mini nutcrackers are a truly unique addition to your holiday collection. Just picture one standing on your mantle or hutch. These would make a great gift for your mini loving friends as well since they are unique and somewhat difficult to find in miniatures.', quantity=15, category='Gifts')
    product28 = Product(
        ownerId=2, name='Dolls House Quality Furniture Classic Cream Sofa' , price=12.99, description='One of the largest Dolls House makers in the UK with over 70 designs to choose from.', quantity=15, category='Craft')
    product29 = Product(
        ownerId=3, name='Miniature Koi & Lily Pads' , price=15.99, description='These are hand crafted Koi and Black Moor Fish and Lily Pads that I use for all of my ponds. Each fish and pad are crafted one drop of resin at a time and toothpicks to make sure they fill in correctly.', quantity=17, category='Toys')
    product30 = Product(
        ownerId=1, name='Miniature Sunglasses Glitter ONE PAIR' , price=15.99, description='Miniature sunglasses in a variety of glitter colors. Gotta love the sparkle!', quantity=15, category='Clothing')
    product31 = Product(
        ownerId=2, name='Mini Cookies' , price=19.99, description='Grab bag of assorted miniature cookies handmade polymer clay dollhouse miniatures', quantity=15, category='Craft')
    product32 = Product(
        ownerId=3, name='Mini Gold Tooth Necklace' , price=25.99, description='This tiny tooth Necklace catches the light for a ton of sparkly ,and it looks amazing layered with so many of the other necklaces in my collection... beautiful and dainty.', quantity=12, category='Jewelry')
    product33 = Product(
        ownerId=1, name='Mini Wedding Favors' , price=15.99, description='Hand made magnet Mini Flower Bouquets for your wedding.', quantity=50, category='Wedding')
    product34 = Product(
        ownerId=2, name='Mini Skulls' , price=7.99, description='Mini resin skulls: these would be great to collect, use at a Halloween Party or even giving to your trick or treaters.', quantity=25, category='Art')
    product35 = Product(
        ownerId=3, name='Damascus Butcher Pocket Knife Set - Worlds Smallest Mini Keychain Knife Tiny' , price=47.99, description='Variety Set - Super fun slicing through tape with Mini Knifes! Keychain Design - Just clip it on and go! Cute miniature knife that fits perfectly on a keychain of backpack. High Quality - Stainless Steel blades with sturdy handles from wood or plastic with a shine polish.', quantity=22, category='Home')
    product36 = Product(
        ownerId=2, name='Miniature your name mugs Personalized gifts' , price=7.99, description='Miniature coffee mugs personalized with your name. The perfect gift for your loved ones.', quantity=15, category='Home')
    product37 = Product(
        ownerId=1, name='Miniature Large Leaf Tropical Plant' , price=9.99, description='This gorgeous tropical large leaf plant comes with a white planter finished off with tiny pebbles.', quantity=25, category='Home')
    product38 = Product(
        ownerId=3, name='Bright Color Beads Name Necklace' , price=37.99, description='Bright and beautiful colorful name necklace, personalized with the name or word of your choice on a sparkling gold filled chain, with a gold heart and and round gold beads at each end. The beads are gorgeous jewel tones with gold letters, sure to be eye catching!', quantity=25, category='Jewelry')
    product39 = Product(
        ownerId=2, name='18K GOLD Vintage Birth Month Flower Necklace' , price=147.99, description='18K GOLD Vintage Birth Month Flower Necklace / Birth Flower Square Zodiac / Lotus Floral Pendant Jewelry', quantity=25, category='Jewelry')
    product40 = Product(
        ownerId=1, name='Gold Opal Ring' , price=37.99, description='All pieces from Naturally by Grace are hypoallergenic and are nickel and lead free. A great option for those with sensitive skin!', quantity=15, category='Jewelry')
    product41 = Product(
        ownerId=3, name='Gold Ring, Stackable Ring, Thin Ring, Sterling Silver Ring, Dainty Ring' , price=7.99, description='These are our Hammered Stacking Bands in Gold Filled, Rose Gold Filled or Recycled Sterling Silver', quantity=20, category='Jewelry')
    product42 = Product(
        ownerId=2, name='Mini Ugg Boots' , price=17.99, description='Miniature Ugg Boots, perfect for your small dolls or friends.', quantity=21, category='Clothing')
    product43 = Product(
        ownerId=1, name='Tiny Casual Shoes' , price=27.99, description='Miniature Shoes for your dolls and toys', quantity=25, category='Clothing')
    product44 = Product(
        ownerId=3, name='Mini Nikes' , price=25.99, description='Mini Nike sports shoes, great for display, or for use.', quantity=20, category='Clothing')
    product45 = Product(
        ownerId=2, name='Corduroy pants for 1/6 scale doll clothes' , price=17.99, description='The leggings are made of stretchy corduroy fabric which makes it easy to put on the doll. Bell bottoms and some dolls may require heels or flat shoes depending on the height.', quantity=10, category='Clothing')
    product46 = Product(
        ownerId=1, name='Miniature Christmas Ornaments' , price=12.99, description='Bulk Miniature Christmas Ornaments, Grab Bag of Pretty Mini Glass Ball Baubles. 20 or 40 pieces, Assorted Metallic Color Patterns', quantity=20, category='Wedding')
    product47 = Product(
        ownerId=3, name='Miniature Beer Can ACCESSORY ONLY' , price=17.99, description='Mini Beer Cans, perfect for parties or events!', quantity=22, category='Wedding')
    product48 = Product(
        ownerId=2, name='Miniature Drink Cup' , price=17.99, description='Miniature Drinks, perfect for parties or events!', quantity=10, category='Wedding')
    product49 = Product(
        ownerId=1, name='Personalised Love Padlock, Engagement Love Lock' , price=27.99, description='Personalized Lock, a great gift for your engaged friends or loved ones.', quantity=14, category='Wedding')
    product50 = Product(
        ownerId=3, name='McDonalds Mini Halloween Buckets' , price=7.99, description='Mini Halloween Buckets, perfect for your dolls or toys as accessories', quantity=16, category='Toys')
    product51 = Product(
        ownerId=2, name='Mini Milk Crate' , price=17.99, description='Mini Milk Crates, perfect for use on a miniature set or for any toys/collectibles.', quantity=19, category='Toys')
    product52 = Product(
        ownerId=1, name='Gemstone Dragon' , price=27.99, description='Gemstone Dragons, the perfect toys for your kids!', quantity=19, category='Toys')
    product53 = Product(
        ownerId=3, name='Fidget Frog Fidget Toy' , price=6.99, description='Fidget Frog Fidget Toy, Articulated Sensory Toy, Tiny Frogs, Flexible Frog, Desk Fidget Toy, Sensory Toy Adult, Stress Toy, Articulated Stim', quantity=12, category='Toys')
    product54 = Product(
        ownerId=2, name='Vintage Wildflower Field Wall Art' , price=57.99, description='Vintage Botanical Wildflower Field Wall Art | Framed Wood Signs Print of vintage art. Print is printed directly to painted wood.', quantity=16, category='Art')
    product55 = Product(
        ownerId=1, name='Printable Vintage Art Prints for Home Decor' , price=27.99, description='Elevate your home decor to extraordinary heights with our exquisite Eclectic Gallery Set. Immerse yourself in a world of artistic wonder as you explore our mega bundle', quantity=12, category='Art')
    product56 = Product(
        ownerId=3, name='Japanese Matsumoto Hoji Frog Set of 3' , price=24.99, description='Japanese Matsumoto Hoji Frog Set of 3, Vintage Frog Woodblock Poster, Ukiyo-e Frog Print, Japanese Frog Printable Wall Art', quantity=11, category='Art')
    product57 = Product(
        ownerId=2, name='Miniature Picture Vincent Van Gogh Starry Night' , price=15.99, description='Miniature dollhouse print in an ornate gold frame. This has a magnetic back. It also may be displayed free standing on your favorite table or dresser.', quantity=16, category='Art')
    product58 = Product(
        ownerId=1, name='Leather Air Plant Holder' , price=20.99, description='A little leather air-plant holder brings a little bit of greenery into your home or office, without all the mess of a potted plant.', quantity=16, category='Craft')
    product59 = Product(
        ownerId=3, name='Beautiful Hardwood Lucet in two sizes for Cord Making' , price=7.99, description='Made from super beautiful hardwoods, this lucet is sure to turn heads! A lucet is an ancient cord making tool used by Vikings and reenactors alike.', quantity=16, category='Craft')
    product60 = Product(
        ownerId=2, name='DIY bowling game, wooden bowling pins' , price=18.99, description='Set of 10 wooden bowling pins and 2 balls. They are unfinished and ready for you to paint or stain. ', quantity=19, category='Craft')
    product61 = Product(
        ownerId=1, name='Miniature Gift Packages' , price=10.99, description='Three beautiful little packages, lovingly wrapped. All tied up with a fluffy Red Bow.', quantity=20, category='Gifts')
    product62 = Product(
        ownerId=3, name='Mini Toy Random Assortment' , price=24.99, description='Mini Toys Random Assortment Qty: 14 random miniature toys per order', quantity=16, category='Gifts')
    product63 = Product(
        ownerId=2, name='Micro crochet Dollhouse miniature geese' , price=37.99, description='These cute tiny geese can be gifted to your lovely person on a special date or holiday. You can choose the goose-boy or goose-girl or the couple.', quantity=26, category='Gifts')
    product64 = Product(
        ownerId=1, name='Mallard Wooden Duck Figurine' , price=7.99, description='This is a cute little duck that measures about 2.5 inches long and 1 inch tall.', quantity=10, category='Gifts')



    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.add(product7)
    db.session.add(product8)
    db.session.add(product9)
    db.session.add(product10)
    db.session.add(product11)
    db.session.add(product12)
    db.session.add(product13)
    db.session.add(product14)
    db.session.add(product15)
    db.session.add(product16)
    db.session.add(product17)
    db.session.add(product18)
    db.session.add(product19)
    db.session.add(product20)
    db.session.add(product21)
    db.session.add(product22)
    db.session.add(product23)
    db.session.add(product24)
    db.session.add(product25)
    db.session.add(product26)
    db.session.add(product27)
    db.session.add(product28)
    db.session.add(product29)
    db.session.add(product30)
    db.session.add(product31)
    db.session.add(product32)
    db.session.add(product33)
    db.session.add(product34)
    db.session.add(product35)
    db.session.add(product36)
    db.session.add(product37)
    db.session.add(product38)
    db.session.add(product39)
    db.session.add(product40)
    db.session.add(product41)
    db.session.add(product42)
    db.session.add(product43)
    db.session.add(product44)
    db.session.add(product45)
    db.session.add(product46)
    db.session.add(product47)
    db.session.add(product48)
    db.session.add(product49)
    db.session.add(product50)
    db.session.add(product50)
    db.session.add(product51)
    db.session.add(product52)
    db.session.add(product53)
    db.session.add(product54)
    db.session.add(product55)
    db.session.add(product56)
    db.session.add(product57)
    db.session.add(product58)
    db.session.add(product59)
    db.session.add(product60)
    db.session.add(product61)
    db.session.add(product62)
    db.session.add(product63)
    db.session.add(product64)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()

#need to have one of these undo commands for each seeded table, just replace undo_users with products, etc.
