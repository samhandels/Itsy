import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from "../../context/Modal"
import { Link } from 'react-router-dom'
import OpenModalButton from '../OpenModalButton'
import ReviewFormModal  from '../ReviewFormModal'


const ReviewFormPage = ({ reviewId }) => {
    const [reviewDetails, setReviewDetails] = useState("")
    const [rating, setRating] = useState()
    const [activeRating, setActiveRating] = useState()
    const [reviewPage, setReviewPage] = useState(1)

    const nextPage = (e) => {
        e.preventDefault();
        setReviewPage(reviewPage + 1)
    }

    const prevPage = (e) => {
        e.preventDefault();
        setReviewPage(reviewPage - 1)
    }
    return (
        <div>
            <OpenModalButton
                buttonText="Show Review Modal"
                modalComponent={<ReviewFormModal />}
            />
            <div>
                <form className="review-form" onSubmit={nextPage}>
                    {reviewPage === 1 &&
                        <div className='review_step_1'>
                            <textarea type="text" placeholder={reviewDetails === "" ? "Leave your review here" : ""}
                                onChange={e => setReviewDetails(e.target.value)}>
                                {
                                    reviewDetails == "" ? "" : reviewDetails
                                }
                            </textarea>
                            <button type="button" onClick={nextPage}>Next</button>
                        </div>}
                    {reviewPage === 2 && <div className="review_step_2">
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
                        <div>
                            <p>Stars</p>
                        </div>
                        <button type="button" onClick={prevPage}>Go Back</button>
                        <button type="button" onClick={nextPage}>Next</button>
                    </div>}
                    {
                        reviewPage === 3 &&
                        <div>
                            <div>
                                <p>{reviewDetails}</p>
                                <div>
                                    <i className={rating >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                    <i className={rating >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                    <i className={rating >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                    <i className={rating >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                    <i className={rating >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                </div>

                            </div>
                            <button type="button" onClick={prevPage}>Go Back</button>
                            <button type="submit">Submit Your Review</button>
                        </div>
                    }
                </form>
            </div>
        </div>
    )

}

export default ReviewFormPage
