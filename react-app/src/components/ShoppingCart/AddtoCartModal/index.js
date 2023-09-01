// Render a pop up after you click on Add to cart(on product detail page)
import { useDispatch } from "react-redux";
import { useSideModal } from "../../../context/SideModal"; //!change to side modal css later
import "./AddtoCart.css";
//need to create item from this sideModal after clicking the "view cart & chcekcout"
import { createItemThunk } from "../../../store/shoppingCartReducer";
// need to prop productId from product detail page, shoppingCartId can be the current_user from backend
import { useHistory } from "react-router-dom";

//userID == shoppingCartId
export function AddtoCartModal({ product, purchaseQuantity }) {
  const dispatch = useDispatch();
  const { closeModal } = useSideModal();
  const history = useHistory();
  // console.log("************In Add to Cart Modal **********", productId);

  const createCartItem = (e) => {
    e.preventDefault();
    dispatch(createItemThunk(product.id, purchaseQuantity))
    closeModal() //if use .then(closeModal) it doesn't fire
    history.push("/shopping_cart/current");
  };

  return (
    <div className="margin-top column center">
      <div className="row">
        <div className="item-img">
          <img src={product?.product_image[0]} alt="" className="cart-img" />
        </div>
        <div>1 item added to cart!</div>
      </div>

        <div className="column">
          <div className="button-container">
            <button className="back-button" type="button" onClick={closeModal}>
              Don't add to cart
            </button>
          </div>
          <div className="button-container">
            <button
              className="forward-button"
              type="submit"
              onClick={createCartItem}
            >
              Add and view cart
            </button>
          </div>
        </div>
    </div>
  );
}