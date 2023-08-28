import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../../store/productsReducer";
import { useEffect } from "react";
import './styleProductDetails.css'


export const ProductDetails = () => {
      const { productId } = useParams()
      const dispatch = useDispatch()

      let dollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
      });

      const product = useSelector( (state) => state.products ? state.products.singleProduct : null )

      useEffect( () => {
            dispatch(fetchProductDetails(productId))
      }, [dispatch, productId])

      console.log('herehere', product);

      if (!product) return null

      return (

            <div>

            <div id='filter-holder-ProductDetails'>
                  <div id='filter-ProductDetails'>
                        All categories ＞  {product.category}  ＞ {product.name}
                  </div>
            </div>



            <div id='entire-page-productDetails'>

                  <div id='left-panel-productDetails'>

                        <div id='primary-image-holder-productDetails'>
                              <img id='primary-image-productDetails' src={product.product_image[0]} />
                        </div>

                        <div id='reviews-holder-productDetails'>
                              {product.reviews[0]}
                        </div>




                  </div>

                  <div id='right-panel-productDetails'>

                        <div id="order-side-panel-productDetials">
                              <div id='supply-count-productDetails'>
                                    Only {product.quantity} left
                              </div>
                              <div id='price-productDetails'>
                                    {dollar.format(product.price)}
                              </div>
                              <div id='desc-productDetails'>
                                    {product.description}
                              </div>
                              <div id='owner-productDetails'>
                                    {product.ownerName}
                              </div>
                              <div id='how-many-productDetails'>
                                    Select how many
                              </div>
                              <div id='install-productDetails'>
                              Pay in 4 installments with Klarna. Learn more...
                              </div>
                              <div id='Add-productDetails'>
                                    Add to cart
                              </div>


                        </div>

                  </div>


            </div>

            </div>
      )
}
