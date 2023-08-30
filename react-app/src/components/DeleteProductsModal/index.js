import "./styleDeleteProductsModal.css";
import { useModal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteProduct } from "../../store/productsReducer";
import { useEffect } from "react";
import { fetchProducts } from "../../store/productsReducer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const DeleteProductsModal = ({ product }) => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const history = useHistory();

//   const deleteProduct = () => {
//       (dispatch(fetchDeleteProduct(product.id)))
//       closeModal()
//   };

  const deleteProduct = async () => {
      await dispatch(fetchDeleteProduct(product.id))
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
      <button id="buttonY" onClick={deleteProduct}>{`Yes`}</button>
      <button id="buttonN" onClick={closeModal}>{`No`}</button>
    </div>
  );
};
