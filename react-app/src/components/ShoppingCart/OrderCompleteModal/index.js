// Render a pop up after you click on Proceed to checkout
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import "./OrderComplete.css";
// import { updateProductThunk } from "../../../store/productsReducer";
//! need to update the products quantity after the order is complete
// import { deleteItemThunk } from "../../../store/shoppingCartReducer";
//! need to clear the item card out from the shopping cart after the order is complete

export function OrderCompleteModal(item) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const orderComplete = (e) => {
    e.preventDefault();
    // dispatch(deleteItemThunk(item)).then(closeModal);
  };

  return (
    <div className="">
      <h1>Order Complete!</h1>
        <div>Itsy bitsy order is on the way:D </div>
      <div className="flex-row buttons">
        <div className="button-container">
          <button className="forward-button" type="submit" onClick={orderComplete}>
            Back to shopping cart
          </button>
        </div>
      </div>
    </div>
  );
}
