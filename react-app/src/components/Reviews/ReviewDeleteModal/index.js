import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useModal } from '../../../context/Modal'
import { Link } from 'react-router-dom'
import './ReviewDeleteModal.css'
import { deleteReview, updateReview } from '../../../store/reviewsReducer'
import { useDispatch } from 'react-redux'

const ReviewDeleteModal = ({ reviewId }) => {
    const dispatch = useDispatch();

    const { closeModal } = useModal();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(deleteReview(reviewId))
        closeModal()
    }


    return (
        <div className="review-modal">
            <form className="delete-review-form" onSubmit={handleSubmit}>
                <div>Are you sure you want to delete this review?</div>
                <button type="button">Go Back</button>
                <button type="submit">Confirm Delete</button>
            </form>
        </div>
    )

}

export default ReviewDeleteModal