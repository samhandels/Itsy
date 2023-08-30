// Render a pop up after you click on Proceed to checkout in the shopping cart(SingleItem component)
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import "./OrderComplete.css";
// import { updateProductThunk } from "../../../store/productsReducer";
//! need to update the products quantity after the order is complete
import { deleteItemThunk } from "../../../store/shoppingCartReducer";
// need to clear the item card out from the shopping cart after the order is complete

export function OrderCompleteModal({ item }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  
  const orderComplete = (e) => {
    e.preventDefault();
    dispatch(deleteItemThunk(item)).then(closeModal);
  };

  return (
    <div className="">
      <h1>Order Complete!</h1>
        <div>Itsy bitsy order will be on it's way:D </div>
      <div className="flex-row buttons">
        <div className="button-container">
        <button className="back-button" type="submit" onClick={closeModal}>
            Cancel
          </button>
          <button className="forward-button" type="submit" onClick={orderComplete}>
            Continue with more order
          </button>
        </div>
      </div>
    </div>
  );
}
