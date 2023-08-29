import { NavLink } from 'react-router-dom';
import './styleProductCard.css'
import { useDispatch, useSelector } from "react-redux";
import { createFavorite, removeFavorite } from '../../store/favoritesReducer';

export const ProductCard = ({product}) => {

      const dispatch = useDispatch();
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

      let dollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
      });

      if (!product) return null
      return (

            <div id='card-holder-productCard'>
                  <NavLink id="link-ProductCard" to={`/products/${product.id}`}>

                  <i className={`nav-link fa-regular fa-heart`} onClick={() => handleHeartClick(product.id)}></i>

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
