import { NavLink } from 'react-router-dom';
import './styleProductCard.css'

export const ProductCard = ({product}) => {

      let dollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
      });

      if (!product) return null
      return (

            <div id='card-holder-productCard'>
                  <NavLink id="link-ProductCard" to={`/products/${product.id}`}>

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
