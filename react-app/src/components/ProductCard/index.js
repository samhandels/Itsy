import { NavLink } from 'react-router-dom';
import './styleProductCard.css'
import { useDispatch, useSelector } from "react-redux";
import { createFavorite, removeFavorite } from '../../store/favoritesReducer';
import { createItemThunk } from '../../store/shoppingCartReducer';

export const ProductCard = ({ product }) => {

      const dispatch = useDispatch();
      const favorites = useSelector((state) => state.favorites.favorites);
      const favArr = Object.values(favorites)
      let favorite
      const isFavorite = (productId) => {
            favorite = favArr.find(favorite => favorite.productId === productId);
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

      let dollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
      });

      const sessionUser = useSelector((state) => state.session.user);

      if (!product) return null
      // console.log("PRODUCT inside product card", product)
      return (

            <div id='card-holder-productCard'>
                  <NavLink id="link-ProductCard" to={`/products/${product.id}`}>


                        {sessionUser && (
                              <i className={`nav-link fa-regular ${isFavorite(product.id) ? "fa-solid fa-heart" : "fa-heart"}`}
                                    id='fa-heart-product-card'
                                    onClick={() => handleHeartClick(product.id)}></i>
                        )}

                        <div id='card-image-ProductCard-div'>
                              <img id='card-image-ProductCard' src={product.image[0]} />
                        </div>
                        <div id='card-name-productCard'>
                              {product.name}
                        </div>
                        <div id='card-price-productCard'>
                              {dollar.format(product.price)}
                        </div>


                  </NavLink>

            </div>


      )

}
