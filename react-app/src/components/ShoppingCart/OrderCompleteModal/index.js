// Render a pop up after you click on Proceed to checkout in the shopping cart(SingleItem component)
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import "./OrderComplete.css";
// need to clear the item card out from the shopping cart after the order is complete
import { deleteItemThunk } from "../../../store/shoppingCartReducer";
// need to update the products quantity after the order is complete
import { fetchProducts, fetchUpdateProduct } from "../../../store/productsReducer";

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


  const orderComplete = (e) => {
    e.preventDefault();
    dispatch(deleteItemThunk(product.id)); //remove from shopping cart
    dispatch(fetchUpdateProduct(updateProduct)) //update product quantity
    dispatch(fetchProducts())
    closeModal()
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
