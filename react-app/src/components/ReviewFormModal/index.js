import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from "../../context/Modal"
import { Link } from 'react-router-dom'
import './ReviewFormModal.css'

const ReviewFormModal = ({ reviewId }) => {
    const [reviewDetails, setReviewDetails] = useState("")
    const [rating, setRating] = useState(0)
    const [activeRating, setActiveRating] = useState(0)
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
        <div className="review-modal">
            <form className="review-form" onSubmit={nextPage}>
                <div className="review-progress-tracker">
                    <div className={reviewPage === 1 ? "current" : "complete"}>{reviewDetails === "" ? "" : <i class="fa-solid fa-check" ></i>}</div>
                    <div className={reviewPage === 2 ? "current" : "complete"}>{rating === 0 ? "" : <i class="fa-solid fa-check" ></i>}</div>
                    <div className={reviewPage === 3 ? "current" : "complete"}>{(reviewDetails === "" && rating === "") ? <i class="fa-solid fa-check" ></i> : ""}</div>
                </div>
                {reviewPage === 1 &&
                    <div className='review-step'>
                        <textarea type="text" placeholder={reviewDetails === "" ? "Leave your review here" : ""}
                            onChange={e => setReviewDetails(e.target.value)}>
                            {
                                reviewDetails == "" ? "" : reviewDetails
                            }
                        </textarea>
                        <button type="button" onClick={nextPage}>Next</button>
                    </div>}
                {reviewPage === 2 && <div className='review-step'>
                    <div className="stars-area">
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
                        <p>Stars</p>
                    </div>
                    <button type="button" onClick={prevPage}>Go Back</button>
                    <button type="button" onClick={nextPage}>Next</button>
                </div>}
                {
                    reviewPage === 3 &&
                    <div className='review-step'>
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
    )

}

export default ReviewFormModal
