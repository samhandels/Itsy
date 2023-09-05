
import { useModal } from '../../../context/Modal'
import { deleteReview, getWaitingReviews } from '../../../store/reviewsReducer'
import { useDispatch } from 'react-redux'
import "./ReviewDeleteModal.css"

const ReviewDeleteModal = ({ reviewId }) => {
    const dispatch = useDispatch();

    const { closeModal } = useModal();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(deleteReview(reviewId))
        // await dispatch(getWaitingReviews())
        closeModal()
    }


    return (
        <div className="delete-review-modal">
            <form className="delete-review-form" onSubmit={handleSubmit}>
                <div className = "delete-modal-title">Are you sure you want to delete this review?</div>
                <div className = "button-container delete-modal-buttons">
                    <button className="forward-button exit-review-modal" type="button" onClick={closeModal}>Go Back</button>
                    <button className="back-button confirm-delete-button" type="submit">Confirm Delete</button>
                </div>
            </form>
        </div>
    )

}

export default ReviewDeleteModal
