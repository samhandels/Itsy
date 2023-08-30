import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { productDetailThunk } from "../../store/products";
//! need product detail thunk
import { ProductForm } from "../ProductForm/index"
import { fetchProductDetails } from "../../store/productsReducer";

export const UpdateProductForm = () => {

      const { productId } = useParams()
      const dispatch = useDispatch()

      const product = useSelector( (state) =>
            state.products ? state.products.singleProduct : null
      )

      useEffect( () => {
            dispatch(fetchProductDetails(productId))
      }, [dispatch, productId])


      if (product) {

            const updateForm = {


            }

            return (
                  <ProductForm product={product} formType="Update" />
            )


      } else {
            return (
                  <h2>Currently Loading</h2>
            )
      }


};
