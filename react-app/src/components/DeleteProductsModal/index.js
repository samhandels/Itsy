import "./styleDeleteProductsModal.css";
import { useModal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteProduct } from "../../store/productsReducer";
import { useEffect } from "react";
import { fetchProducts } from "../../store/productsReducer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const DeleteProductsModal = ({ productId }) => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const history = useHistory();

//   const deleteProduct = () => {
//       (dispatch(fetchDeleteProduct(product.id)))
//       closeModal()
//   };

  const deleteProduct = async () => {
      await dispatch(fetchDeleteProduct(productId))
      closeModal()
  };

  const products = Object.values(
    useSelector((state) => (state.products ? state.products : {}))
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div id="deleteModal">
      <h2>Confirm Delete</h2>
      <div id="youSure">Are you sure you want to remove this spot?</div>
      <form onSubmit={deleteProduct}>
        <button type="submit" id="buttonY" >{`Yes`}</button>
        <button type="button" id="buttonN" onClick={closeModal}>{`No`}</button>
      </form>
    </div>
  );
};
