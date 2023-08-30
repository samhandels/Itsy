import './styleDeleteProductsModal.css'
import { useModal } from '../../context/Modal'
import { useDispatch } from 'react-redux'
import { fetchDeleteProduct } from '../../store/productsReducer'

export const DeleteProductsModal = ({product}) => {

      const { closeModal } = useModal();
      const dispatch = useDispatch();

      const deleteProduct = async (e) => {
            e.preventDefault()
            await dispatch(fetchDeleteProduct(product.id))
            closeModal()
      }

      return (
            <div id='deleteModal' >
                  <h2>Confirm Delete</h2>
                  <div id='youSure' >Are you sure you want to remove this spot?</div>
                  <button id='buttonY' onClick={deleteProduct}>{`Yes`}</button>
                  <button id='buttonN' onClick={closeModal}>{`No`}</button>

            </div>

      )


}
