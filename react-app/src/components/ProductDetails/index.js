import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../../store/productsReducer";
import { useEffect } from "react";


export const ProductDetails = () => {
      const { productId } = useParams()
      const dispatch = useDispatch()

      const product = useSelector( (state) => state.products ? state.products.singleProduct : null )

      useEffect( () => {
            dispatch(fetchProductDetails(productId))
      }, [dispatch, productId])

      console.log('herehere', product);

      return (null)
}
