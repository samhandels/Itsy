import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../../store/productsReducer";
import { useEffect, useState } from "react";
import "./styleProductDetails.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import star from "./itsy-star.png";
import truck from "./itsy-truck.png";
import hand from "./itsy-hand.png";
import { AddtoCartModal } from "../ShoppingCart/AddtoCartModal";
import OpenSideModalButton from "../../components/OpenSideModalButton";
import ReviewFormPage from "../Reviews/ReviewFormPage";
import {
  createFavorite,
  getAllFavorites,
  removeFavorite,
} from "../../store/favoritesReducer";
import { fetchProducts, fetchUpdateProduct } from "../../store/productsReducer";

export const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)
  const reviews = useSelector((state) => state.reviews.reviews);
  const products = useSelector((state) => state.products);
  const favorites = useSelector((state) => state.favorites.favorites);
  const favArr = Object.values(favorites);

  let favorite;
  const isFavorite = (productId) => {
    favorite = favArr.find((favorite) => favorite.productId === productId);
    return favorite;
  };

  let dollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const product = useSelector((state) =>
    state.products ? state.products.singleProduct : null
  );
  const revArr = Object.values(reviews);
  const userReviews = revArr.filter(
    (review) => review.productId === product?.id
  );


  const handleHeartClick = async (productId) => {
    if (isFavorite(productId)) {
      await dispatch(removeFavorite(favorite));
      await dispatch(getAllFavorites(sessionUser ? sessionUser : null));
    } else {
      await dispatch(createFavorite(productId));
      await dispatch(getAllFavorites(sessionUser ? sessionUser : null));
    }
  };

  //for product quantity drop down
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);
  //to check if the current user is the same as product owner
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
    dispatch(getAllFavorites(sessionUser ? sessionUser : null));
    // dispatch(fetchUpdateProduct(product))
  }, [dispatch, productId]);

  if (!product) return null;
  //for product quantity drop down

  //to check if the current user is the same as product owner, if true, don't show "add to cart" OpenModal
  let addItemBtn = "hide";
  if (sessionUser && product?.ownerId !== sessionUser?.id && product.quantity > 0) {
    addItemBtn = "show";
  }

  //if it's out of stock, product quantity shows out of stock, and the add to cart button is disabled
  let stock = "hide";
  let noStock = "hide";
  if (product.quantity <= 0) {
    //when out of stuck  /iphone and fridge are -1, what the frick
    noStock = "show";
  }


  let quantityArr = [];
  if (product.quantity > 0) {
    //has stock
    stock = "show";
    quantityArr = [...Array(product?.quantity + 1).keys()];
    quantityArr.shift(); //1......productQuantity
  }


  return (
    <div id="largest-product-detail-div">
      <div id="filter-holder-ProductDetails">
        <div id="filter-ProductDetails">
          All Categories ＞ {product.category} ＞ {product.name}
        </div>
      </div>

      <div id="entire-page-productDetails">
        <div id="page-productDetails">
          <div id="left-panel-productDetails">
            <div id="left-upper-panel-productDetails">
              <div id="primary-image-holder-productDetails">
                <img
                  id="primary-image-productDetails"
                  src={product?.image}
                  alt="product_image"
                />
              </div>

              <div id="heart-div-productsDetails">
                {sessionUser && (
                  <i
                    id="heart-icon-prod-detail"
                    className={`nav-link fa-regular ${isFavorite(product.id) ? "fa-solid fa-heart" : "fa-heart"
                      }`}
                    onClick={() => handleHeartClick(product.id)}
                  ></i>
                )}
              </div>
            </div>

            <div>
              <ReviewFormPage productId={product.id} />
            </div>

          </div>

          <div id="right-panel-productDetails">
            <div id="order-side-panel-productDetials">
              <div id="supply-count-productDetails" className={stock}>
                Only {product.quantity} left!
              </div>
              <div className={`supply-count-productDetails ${noStock}`}>
                whoops...Out of stock, re-stocking soon!
              </div>
              <div id="price-productDetails">
                {dollar.format(product.price)}
              </div>
              <div id="name-productDetails">{product.name}</div>
              <div id="owner-productDetails">Sold by {product.ownerName}</div>

              <div id="return-productDetails">
                ✓ Returns & exchanges accepted
              </div>

              <div id="how-many-productDetails">

              {
                !sessionUser ?
                <div> Please log-in or sign-up to buy this item </div>

                :

                sessionUser && product?.ownerId !== sessionUser?.id ?

                <label>
                  {" "}
                  Choose how many you would like:  {" "}
                  <select
                    name="selectedPurchaseQuantity"
                    value={purchaseQuantity}
                    onChange={(e) => setPurchaseQuantity(e.target.value)}
                  >
                    {quantityArr.map((number) => (
                      <option value={number}>{number}</option>
                    ))}
                  </select>
                </label>

                :

                <div> You can't purchase your own products </div>


              }



              </div>
              {/* <div id="install-productDetails">
                Pay in 4 installments with Klarna...
                <a
                  href="https://www.klarna.com/us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more
                </a>
              </div> */}
              <div
                id="add-item-cart-fav-butt-ProductDetails"
                className={addItemBtn}

              >
                <OpenSideModalButton
                  buttonStyle="Add-productDetails"
                  buttonText="Add to cart"
                  disabled={false}
                  modalComponent={
                    <AddtoCartModal
                      product={product}
                      purchaseQuantity={purchaseQuantity}
                    />
                  }
                />
              </div>
              <div id="add-item-cart-fav-butt-ProductDetails">
                {sessionUser && (
                  <button
                    className="Add-productDetails"
                    onClick={() => handleHeartClick(product.id)}
                  >
                    Add to Favorites &#x2764;
                  </button>
                )}
              </div>

              <div id="star-section-productDetails">
                <img id="star-image-productDetails" src={star} />
                <div id="star-text-productDetails">
                  This seller consistently earned 5-star reviews, shipped on
                  time, and replied quickly to any messages they received.
                </div>
              </div>

              <div id="truck-section-productDetails">
                <img id="truck-image-productDetails" src={truck} />
                <div id="truck-text-productDetails">
                  HOORAY! This item ships free to the US.
                </div>
              </div>

              <div id="desc-section-productDetails">
                <h4 id="h4-productDetails">Description</h4>
                <div id="desc-productDetails">{product.description}</div>
              </div>

              <div id="ship-return-section-productDetails">
                <h4>Shipping and Return Policies</h4>
                <div id="cost-productDetails">Cost to ship</div>
                <div id="free-productDetails">FREE</div>

                <div id="offset-productDetails">
                  Etsy offsets carbon emissions from shipping and packaging on
                  this purchase.
                </div>

                <div id="return-div-productDetails">
                  <div>
                    <div id="cost-productDetails">Returns & Exchanges</div>
                    <div id="accepted-productDetails">ACCEPTED</div>
                  </div>
                  <div>
                    <div id="cost-productDetails">Return & Exchange Window</div>
                    <div id="days-productDetails">21 DAYS</div>
                  </div>
                </div>

                <div id="hand-section-productDetails">
                  <img id="hand-image-productDetails" src={hand} />
                  <div id="hand-text-productDetails">
                    Etsy Purchase Protection: Shop confidently on Etsy knowing
                    if something goes wrong with an order, we've got your back
                    for all eligible purchases.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
