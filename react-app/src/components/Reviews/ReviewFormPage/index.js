import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import OpenModalButton from '../../OpenModalButton'
import ReviewFormModal from '../ReviewFormModal'
import './ReviewFormPage.css'


const ReviewFormPage = ({ reviewId }) => {
    const [rating, setRating] = useState()
    const [activeRating, setActiveRating] = useState()

    return (
        <div className="review-container">
            <Link to=""></Link>
            <OpenModalButton
                buttonText={<form className = "review-component">
                    <p>Review this item</p>
                    <div className='review-mini'>
                        <div
                            onMouseEnter={() => setActiveRating(1)}
                            onMouseLeave={() => setActiveRating(rating)}
                            onClick={() => setRating(1)}>
                            <i className={activeRating >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                        </div>
                        <div
                            onMouseEnter={() => setActiveRating(2)}
                            onMouseLeave={() => setActiveRating(rating)}
                            onClick={() => setRating(2)}>
                            <i className={activeRating >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                        </div>
                        <div
                            onMouseEnter={() => setActiveRating(3)}
                            onMouseLeave={() => setActiveRating(rating)}
                            onClick={() => setRating(3)}>
                            <i className={activeRating >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                        </div>
                        <div
                            onMouseEnter={() => setActiveRating(4)}
                            onMouseLeave={() => setActiveRating(rating)}
                            onClick={() => setRating(4)}>
                            <i className={activeRating >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                        </div>
                        <div
                            onMouseEnter={() => setActiveRating(5)}
                            onMouseLeave={() => setActiveRating(rating)}
                            onClick={() => setRating(5)}>
                            <i className={activeRating >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                        </div>
                    </div>
                </form >}
                modalComponent={<ReviewFormModal />}
            />
        </div >
    )

}

export default ReviewFormPage
