// Render a pop up after you click on Add to cart(on product detail page)
import { useDispatch } from "react-redux";
import { useSideModal } from "../../../context/SideModal"; //!change to side modal css later
import "./AddtoCart.css";
//need to create item from this sideModal after clicking the "view cart & chcekcout"
import { createItemThunk } from "../../../store/shoppingCartReducer";
// need to prop productId from product detail page, shoppingCartId can be the current_user from backend
import { useHistory } from "react-router-dom";
import { ItemsSideModal } from "../ItemsSideModal";

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
    <>
      <section className="margin-top column center margin-bottom">
        <div className="row center">
          <div className="item-img">
            <img src={product?.product_image[0]} alt="" className="cart-img" />
          </div>
          <div>1 item added to cart!</div>
        </div>
          <div className="column  ">
            <div className="button-container margin-top">
              <button className="back-button width-btn" type="button" onClick={closeModal}>
                Don't add to cart
              </button>
            </div>
            <div className="button-container margin-top column">
              <button
                className="forward-button width-btn"
                type="submit"
                onClick={createCartItem}
              >
                Add and view cart
              </button>
            </div>
          </div>
      </section>
      <section id='discover-sec-shopping-cart' className="discover-item-cards">
        <div className='margin-top font-size padding'>Items you may like</div>
        <ItemsSideModal />
      </section>
    </>
  );
}