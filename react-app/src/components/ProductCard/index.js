import { NavLink } from 'react-router-dom';
import './styleProductCard.css'
import { useDispatch, useSelector } from "react-redux";
import { createFavorite, removeFavorite } from '../../store/favoritesReducer';

export const ProductCard = ({product}) => {

      const dispatch = useDispatch();
      const favorites = useSelector((state) => state.favorites.favorites);
      const favArr = Object.values(favorites)
      const isFavorite = (productId) => {
            // console.log("PRODUCT ID INSIDE ISFAVORITE FUNCTION", productId)
            // console.log("FAVORITES INSIDE ISFAVORITE FUNCTION", favorites)
            // console.log("favArr .find in isFavorite --------", favArr.find(favorite => favorite.productId === productId))
            return favArr.find(favorite => favorite.productId === productId);

        };



      // console.log("FAVORITES HANDLE CLICK HEART -- ", favorites)
      const handleHeartClick = async(productId) => {
            // console.log("PRODUCT ID in handle-click", productId)
            if (isFavorite(productId)) {
                await dispatch(removeFavorite(productId));
            } else {
                await dispatch(createFavorite(productId));
            }
        };

      let dollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
      });

      console.log("looooook at me", product);

      if (!product) return null
      // console.log("PRODUCT inside product card", product)
      return (

            <div id='card-holder-productCard'>
                  <NavLink id="link-ProductCard" to={`/products/${product.id}`}>

                  <i className={`fa-regular fa-heart`} id='fa-heart-product-card' onClick={() => handleHeartClick(product.id)}></i>

                        <div id='card-image-ProductCard'>
                              <img id='card-image-ProductCard' src={ product.product_image[0] } />
                        </div>
                        <div id='card-name-productCard'>
                              { product.name }
                        </div>
                        <div id='card-price-productCard'>
                              {dollar.format(product.price)}
                        </div>


                  </NavLink>

            </div>


      )

}
