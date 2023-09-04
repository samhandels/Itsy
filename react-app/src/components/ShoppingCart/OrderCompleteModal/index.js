// Render a pop up after you click on Proceed to checkout in the shopping cart(SingleItem component)
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import "./OrderComplete.css";
import { addTransaction, getTransactionItemsThunk } from "../../../store/transactionReducer";
import { useEffect } from "react";
// need to clear the item card out from the shopping cart after the order is complete
import { deleteItemThunk } from "../../../store/shoppingCartReducer";
// need to update the products quantity after the order is complete
import { fetchProducts, fetchUpdateProduct } from "../../../store/productsReducer";
import { addWaitingReview, getWaitingReviews } from "../../../store/reviewsReducer";

export function OrderCompleteModal({ product, purchaseQuantity }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const { id, name, price, description, quantity, category, product_image } = product
  //the correct product quantity after order is complete
  const updateProduct = { id, name, price, description, quantity, category }
  //  console.log('******************  Product******************', product);
  //  console.log('****************** before Product******************', updateProduct);
  updateProduct.quantity = updateProduct.quantity - purchaseQuantity
  updateProduct.url = product_image[0] //has to match what the fetchUpdateProduct key and data formate it wants
  //  console.log('******************purchaseQuantity******************', purchaseQuantity);
  //  console.log('******************updatedProduct******************', updateProduct);

  const itemsInCart = useSelector((state) => state.items)
  const itemArr = Object.values(itemsInCart)
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteItemThunk(product.id)); //remove from shopping cart
    dispatch(fetchUpdateProduct(updateProduct)) //update product quantity
    dispatch(fetchProducts())
    dispatch(addTransaction(itemArr))
    // itemArr.forEach((item) => {
    //   dispatch(addWaitingReview(item.id))
    // })
    closeModal()
  };

  useEffect(() => {
    dispatch(getTransactionItemsThunk())
    dispatch(getWaitingReviews())
  }, [dispatch])

  return (
    <div className="margin-bottom margin-side">
      <div className="order-complete margin-top">Order Complete!</div>
      <div className="margin-bottom">Itsy bitsy order will be on it's way:D </div>
      <div className="flex-row buttons">
        <div className="button-container-order">
          <form className="button-container-order" onSubmit={onSubmit}>
            <button className="back-button-cancel margin-right" type="button" onClick={closeModal}>
              Cancel
            </button>
            <button className="forward-button-order" type="submit">
              Continue with more order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
