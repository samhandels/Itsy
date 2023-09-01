// Render a pop up after you click on Proceed to checkout in the shopping cart(SingleItem component)
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import "./OrderComplete.css";
// import { updateProductThunk } from "../../../store/productsReducer";
//! need to update the products quantity after the order is complete
import { deleteItemThunk } from "../../../store/shoppingCartReducer";
import { addTransaction, getTransactionItemsThunk } from "../../../store/transactionReducer";
import { useEffect } from "react";
// need to clear the item card out from the shopping cart after the order is complete

export function OrderCompleteModal({ product, items }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const itemsInCart = useSelector((state) => state.items)
  const itemArr = Object.values(itemsInCart)


  console.log("ITEMARR", itemArr)

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(deleteItemThunk(product.id))
    console.log("HERE")

    await dispatch(addTransaction(itemArr))
    console.log("ALSO HERE")
    closeModal();
  };

  useEffect(()=> {
    dispatch(getTransactionItemsThunk())
  },[dispatch])

  return (
    <div className="">
      <h1>Order Complete!</h1>
      <div>Itsy bitsy order will be on it's way:D </div>
      <div className="flex-row buttons">
        <div className="button-container">
          <form onSubmit={onSubmit}>
            <button className="back-button" type="button" onClick={closeModal}>
              Cancel
            </button>
            <button className="forward-button" type="submit">
              Continue with more order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
