import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useModal } from '../../../context/Modal'
import { Link } from 'react-router-dom'
import './ReviewFormModal.css'
import { postReview } from '../../../store/reviewsReducer'

const ReviewFormModal = ({ productId }) => {
    const [reviewDetails, setReviewDetails] = useState("")
    const [rating, setRating] = useState(0)
    const [activeRating, setActiveRating] = useState(0)
    const [reviewPage, setReviewPage] = useState(1)

    
    try {
        await dispatch(postReview(productId, reviewInfo))
    }


    const { closeModal } = useModal();
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

    let reviewInfo = { reviewDetails, stars }


    return (
        <div className="review-modal">
            <div className="review-progress-tracker">
                {reviewPage === 1 && <p>Leave a Review</p>}
                {reviewPage === 2 && <p>Great! One more thing...</p>}
                {reviewPage === 3 && <p>Ready to submit?</p>}
                <div className='progress-circles'>
                    <div className={reviewPage === 1 ? "current" : "complete"}>{rating === 0 ? "" : <i className="fa-solid fa-check" ></i>}</div>
                    <div className={reviewPage === 2 ? "current" : "complete"}>{reviewDetails === "" ? "" : <i className="fa-solid fa-check" ></i>}</div>
                    <div className={reviewPage === 3 ? "current" : "complete"}>{(reviewDetails === "" && rating === "") ? <i className="fa-solid fa-check" ></i> : ""}</div>
                </div>
            </div>
            <form className="review-form" onSubmit={nextPage}>
                {reviewPage === 1 && <div className='review-step review-step-1'>
                    <div >
                        <div className="review-step-one-upper">
                            <div>
                                <img className="review-product-image" src="https://i.etsystatic.com/24879642/r/il/84b06b/4197773364/il_794xN.4197773364_560s.jpg"></img>
                            </div>
                            <div className="review-step-one-upper-right">
                                <div>PRODUCT NAME HERE</div>
                                <div>SHOP OWNER NAME HERE</div>
                                <div className="modal-stars-area">
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
                                <div>My review rating<span className="error">*</span></div>
                            </div>
                        </div>
                        {rating < 3 && <div className="low-review-help">
                            <p>Sorry your experience wasn't great</p>
                            <p>Learn ways to <Link className="review-help-link" onClick={() => closeModal()} to="/">get help with your order.</Link></p>
                        </div>}
                    </div>
                </div>}
                {reviewPage === 2 &&
                    <div className='review-step review-step-2'>
                        <p className="review-text-sugg">Helpful reviews on Etsy mention:</p>
                        <ul>
                            <li>the quality of the item</li>
                            <li>if the item matched the description</li>
                            <li>if the item met your expectations</li>
                        </ul>
                        <textarea className="review-text" type="text" placeholder={reviewDetails === "" ? "Leave your review here" : ""}
                            onChange={e => setReviewDetails(e.target.value)}>
                            {
                                reviewDetails === "" ? "" : reviewDetails
                            }
                        </textarea>
                        <p>By submitting, you agree to <Link to="/" onClick={() => closeModal()} className="review-help-link">Etsy's Review Policy</Link></p>
                    </div>}
                {
                    reviewPage === 3 &&
                    <div className='review-step review-step-3'>
                        <p className="review-detail-review">{reviewDetails}</p>
                        <div>
                            <i className={rating >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={rating >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={rating >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={rating >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={rating >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                        </div>
                    </div>
                }
                <div className="review-button-container">
                    {reviewPage === 1 && <button type="button" className="back-button">Exit</button>}
                    {reviewPage > 1 && <button type="button" className="back-button" onClick={prevPage}>Go Back</button>}
                    {reviewPage < 3 && <button type="button" className="forward-button" onClick={nextPage}>Next</button>}
                    {reviewPage === 3 && <button type="submit" className="forward-button" >Submit Your Review</button>}
                </div>

            </form>
        </div>
    )

}

export default ReviewFormModal
