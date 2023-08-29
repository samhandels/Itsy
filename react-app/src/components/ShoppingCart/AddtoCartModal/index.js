// Render a pop up after you click on Add to cart(on product detail page)
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/SideModal";
import "./AddtoCart.css";
//! need to create item from this sideModal after clicking the "view cart & chcekcout"
// import { createItemThunk } from "../../../store/shoppingCartReducer";

export function AddtoCartModal(item) {
  const dispatch = useDispatch();
  // const { closeModal } = useModal();

  const orderComplete = (e) => {
    e.preventDefault();
    // dispatch(createItemThunk(item)).then(closeModal);
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
