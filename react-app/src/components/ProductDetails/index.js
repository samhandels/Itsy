import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../../store/productsReducer";
import { useEffect } from "react";
import "./styleProductDetails.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import star from "./itsy-star.png";
import truck from "./itsy-truck.png";
import hand from "./itsy-hand.png";
import { AddtoCartModal} from "../ShoppingCart/AddtoCartModal"
import OpenModalButton from "../../components/OpenModalButton";
import ReviewFormPage from "../Reviews/ReviewFormPage";
import { createFavorite, removeFavorite } from '../../store/favoritesReducer';

export const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const reviews = useSelector((state) => state.reviews.reviews)
  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = (productId) => {
    return favorites[productId];
  };
  const handleHeartClick = (productId) => {
    if (isFavorite(productId)) {
        dispatch(removeFavorite(productId));
    } else {
        dispatch(createFavorite(productId));
    }
  };

  let dollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const product = useSelector((state) =>
    state.products ? state.products.singleProduct : null
  );
  const revArr = Object.values(reviews)
  const userReviews = revArr.filter((review) => review.productId === product?.id)


  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch, productId]);

  if (!product) return null;

  return (
    <div id="largest-product-detail-div">
      <div id="filter-holder-ProductDetails">
        <div id="filter-ProductDetails">
          All categories ＞ {product.category} ＞ {product.name}
        </div>
      </div>

      <div id="entire-page-productDetails">
        <div id="page-productDetails">
          <div id="left-panel-productDetails">
              <i id="heart-icon-prod-detail" className={`nav-link fa-regular ${isFavorite(product.id) ? "fa-heart-filled" : "fa-heart"}`} onClick={() => handleHeartClick(product.id)}></i>
            <div id="primary-image-holder-productDetails">
              <img
                id="primary-image-productDetails"
                src={product.product_image[0]}
              />
            </div>
            <div>
              <ReviewFormPage productId={product.id} />
            </div>
            {userReviews.map((review) => (
              <div>{review.review}</div>
            ))}
          </div>

          <div id="right-panel-productDetails">
            <div id="order-side-panel-productDetials">
              <div id="supply-count-productDetails">
                Just {product.quantity} Available
              </div>
              <div id="price-productDetails">
                {dollar.format(product.price)}
              </div>
              <div id="name-productDetails">{product.name}</div>
              <div id="owner-productDetails">Sold by {product.ownerName}</div>

              <div id="return-productDetails">
                ✓ Returns & exchanges accepted
              </div>

              <div id="how-many-productDetails">Select how many</div>
              <div id="install-productDetails">
                Pay in 4 installments with Klarna...
                <a href="https://www.klarna.com/us/" target="_blank">
                  Learn more
                </a>
              </div>
              <div>
                <OpenModalButton
                  buttonStyle="Add-productDetails"
                  buttonText="Add to cart"
                    modalComponent={<AddtoCartModal productId={product?.id}/>}
          />
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
