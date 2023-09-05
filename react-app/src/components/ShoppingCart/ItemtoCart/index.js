import { NavLink } from "react-router-dom";
import "../../AllProducts/styleAllProducts.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createFavorite,
  removeFavorite,
} from "../../../store/favoritesReducer";
import { createItemThunk } from "../../../store/shoppingCartReducer";
import OpenSideModalButton from "../../OpenSideModalButton"
import { AddtoCartModal } from "../AddtoCartModal";

export const ItemtoCart = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const favArr = Object.values(favorites);
  let favorite;
  const isFavorite = (productId) => {
    favorite = favArr.find((favorite) => favorite.productId === productId);
    return favorite;
  };

  // console.log("FAVORITES HANDLE CLICK HEART -- ", favorites)
  const handleHeartClick = async (productId) => {
    // console.log("PRODUCT ID in handle-click", productId)
    if (isFavorite(productId)) {
      await dispatch(removeFavorite(favorite));
    } else {
      await dispatch(createFavorite(productId));
    }
  };

  let purchaseQuantity = 1;
  const addOnetoCart = (e) => {
    e.preventDefault();
    // console.log("*************************product id in the item card***************************", product.id);
    // console.log("*************************purchasequantity in the item card***************************", purchaseQuantity);

    dispatch(createItemThunk(product?.id, purchaseQuantity));
  };

  let dollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const sessionUser = useSelector((state) => state.session.user);

  if (!product) return null;
  // console.log("PRODUCT inside product card", product)
  return (
    <div id="card-holder-productCard">
      <NavLink id="link-ProductCard" to={`/products/${product.id}`}>
        {sessionUser && (
          <i
            className={`nav-link fa-regular ${
              isFavorite(product.id) ? "fa-solid fa-heart" : "fa-heart"
            }`}
            id="fa-heart-product-card"
            onClick={() => handleHeartClick(product.id)}
          ></i>
        )}

        <div id="card-image-ProductCard">
          <img id="card-image-ProductCard" src={product.product_image[0]} />
        </div>
        <div id="card-name-productCard">{product.name}</div>
        <div id="card-price-productCard">{dollar.format(product.price)}</div>
        <div id="add-item-cart-fav-butt-ProductDetails" >
        {/* className={addItemBtn} */}
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
        {/* <div>
                              <button className='forward-button-order padding-less' onClick={addOnetoCart}>Add to cart</button>
                        </div> */}
      </NavLink>
    </div>
  );
};
