import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useModal } from "../../../context/Modal"
// import { Link } from 'react-router-dom'
import './ReviewFormModal.css'

const ReviewFormModal = () => {
    const [reviewDetails, setReviewDetails] = useState("")
    const [rating, setRating] = useState(0)
    const [activeRating, setActiveRating] = useState(0)
    const [reviewPage, setReviewPage] = useState(1)

    const nextPage = (e) => {
        e.preventDefault();
        setReviewPage(reviewPage + 1)
        console.log("Page" + reviewPage)
    }
    const prevPage = (e) => {
        e.preventDefault();
        setReviewPage(reviewPage - 1)
        console.log("Page" + reviewPage)
    }
    return (
        <div className="review-modal">
            <div className="review-progress-tracker">
                <p>Leave a Review</p>
                <div>
                    <div className={reviewPage === 1 ? "current" : "complete"}>{rating === 0 ? "" : <i class="fa-solid fa-check" ></i>}</div>
                    <div className={reviewPage === 2 ? "current" : "complete"}>{reviewDetails === "" ? "" : <i class="fa-solid fa-check" ></i>}</div>
                    <div className={reviewPage === 3 ? "current" : "complete"}>{(reviewDetails === "" && rating === "") ? <i class="fa-solid fa-check" ></i> : ""}</div>
                </div>
            </div>
            <form className="review-form" onSubmit={nextPage}>
                {reviewPage === 1 && <div className='review-step review-step-1'>
                    <div>
                
                    </div>
                    <div className="stars-area">
                        <tooltip title="Disappointed">
                            <div
                                onMouseEnter={() => setActiveRating(1)}
                                onMouseLeave={() => setActiveRating(rating)}
                                onClick={() => setRating(1)}>
                                <i className={activeRating >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            </div>
                        </tooltip>
                        <tooltip title="Not a fan">
                            <div
                                onMouseEnter={() => setActiveRating(2)}
                                onMouseLeave={() => setActiveRating(rating)}
                                onClick={() => setRating(2)}>
                                <i className={activeRating >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            </div>
                        </tooltip>
                        <tooltip title="It's okay">
                            <div
                                onMouseEnter={() => setActiveRating(3)}
                                onMouseLeave={() => setActiveRating(rating)}
                                onClick={() => setRating(3)}>
                                <i className={activeRating >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            </div>
                        </tooltip>
                        <tooltip title="Like it">
                            <div
                                onMouseEnter={() => setActiveRating(4)}
                                onMouseLeave={() => setActiveRating(rating)}
                                onClick={() => setRating(4)}>
                                <i className={activeRating >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            </div>
                        </tooltip>
                        <tooltip title="Love it">
                            <div
                                onMouseEnter={() => setActiveRating(5)}
                                onMouseLeave={() => setActiveRating(rating)}
                                onClick={() => setRating(5)}>
                                <i className={activeRating >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            </div>
                        </tooltip>
                    </div>

                </div>}
                {reviewPage === 2 &&
                    <div className='review-step'>
                        <textarea className="review-text" type="text" placeholder={reviewDetails === "" ? "Leave your review here" : ""}
                            onChange={e => setReviewDetails(e.target.value)}>
                            {
                                reviewDetails === "" ? "" : reviewDetails
                            }
                        </textarea>

                    </div>}
                {
                    reviewPage === 3 &&
                    <div className='review-step'>
                        <p>{reviewDetails}</p>
                        <div>
                            <i className={rating >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={rating >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={rating >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={rating >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={rating >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                        </div>
                    </div>
                }
                <div>
                    {reviewPage < 3 && <button type="button" onClick={nextPage}>Next</button>}
                    {reviewPage > 1 && <button type="button" onClick={prevPage}>Go Back</button>}
                    {reviewPage === 1 && <button type="button">Exit</button>}
                </div>

                {reviewPage === 3 && <button type="submit">Submit Your Review</button>}
            </form>
        </div>
    )

}

export default ReviewFormModal
