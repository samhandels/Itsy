// Render a pop up after you click on Add to cart(on product detail page)
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal"; //!change to side modal css later
import "./AddtoCart.css";
//need to create item from this sideModal after clicking the "view cart & chcekcout"
import { createItemThunk } from "../../../store/shoppingCartReducer";
// need to prop productId from product detail page, shoppingCartId can be the current_user from backend
import { useHistory } from "react-router-dom";

//userID == shoppingCartId
export function AddtoCartModal({product}) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const history = useHistory();
  // console.log("************In Add to Cart Modal **********", productId);
  
  const createCartItem = (e) => {
    e.preventDefault();
    dispatch(createItemThunk(product.id)).then(closeModal)
    // history.push("/")
    history.push("/shopping_cart/current")
    

  };

  return (
    <>
     <div className="row">
     <div className="item-img"><img
                  src={product?.product_image[0]}
                  alt=""
                  className="cart-img"
                /></div>
       <div>1 item added to cart!</div>
         </div>
     
       <div className="column buttons">
         <div className="button-container">
           <button className="back-button" type="submit" onClick={closeModal}>
             Keep shopping
           </button>
         </div>
         <div className="button-container">
           <button className="forward-button" type="submit" onClick={createCartItem}>
             View cart & check out
           </button>
           </div>
       </div>
    </>
  );
}
