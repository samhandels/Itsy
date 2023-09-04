

import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useModal } from '../../../context/Modal'
import { Link } from 'react-router-dom'
import './ReviewFormModal.css'
import { postReview } from '../../../store/reviewsReducer'
import { useDispatch, useSelector } from 'react-redux'

const ReviewFormModal = ({ currentStars, productId }) => {
    const dispatch = useDispatch();
    const [review, setReview] = useState("")
    const [stars, setStars] = useState(0)
    const [activeStars, setActiveStars] = useState(currentStars)
    const [reviewPage, setReviewPage] = useState(1)
    const [errors, setErrors] = useState([])
    const { closeModal } = useModal();


    let reviews = useSelector((state) => state.reviews.reviews)
    let revArr = Object.values(reviews)

    const products = useSelector((state) => state.products)
    const prodArr = Object.values(products)
    const thisProduct = prodArr[productId - 1]

    // console.log("PRODUCTID", productId)
    // console.log("THISPRODUCTID", thisProduct.id)

    if (!stars) setStars(currentStars)
    let reviewInfo = { review, stars }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await dispatch(postReview(productId, reviewInfo))
        if (data) {
            setErrors(data);
        } else {
            closeModal();

        }
    }

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
            <div className="review-progress-tracker">
                {reviewPage === 1 && <p>Leave a Review</p>}
                {reviewPage === 2 && <p>Great! One more thing...</p>}
                {reviewPage === 3 && <p>Ready to submit?</p>}
                <div className='progress-circles'>
                    <div className={reviewPage === 1 ? "current" : "complete"}>{stars === 0 ? "" : <i className="fa-solid fa-check" ></i>}</div>
                    <div className={reviewPage === 2 ? "current" : "complete"}>{review === "" ? "" : <i className="fa-solid fa-check" ></i>}</div>
                    <div className={reviewPage === 3 ? "current" : "complete"}>{(review === "" && stars === "") ? <i className="fa-solid fa-check" ></i> : ""}</div>
                </div>
            </div>
            <form className="review-form" onSubmit={handleSubmit}>
                {reviewPage === 1 && <div className='review-step review-step-1'>
                    <div >
                        <div className="review-step-one-upper">
                            <div>
                                <img className="review-product-image" src={thisProduct.product_image}></img>
                            </div>
                            <div className="review-step-one-upper-right">
                                <div>{thisProduct && thisProduct.name}</div>
                                <div>{thisProduct && thisProduct.ownerName}</div>
                                <div className="modal-stars-area">
                                    <tooltip title="Disappointed">
                                        <div
                                            onMouseEnter={() => setActiveStars(1)}
                                            onMouseLeave={() => setActiveStars(stars)}
                                            onClick={() => setStars(1)}>
                                            <i className={activeStars >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                        </div>
                                    </tooltip>
                                    <tooltip title="Not a fan">
                                        <div
                                            onMouseEnter={() => setActiveStars(2)}
                                            onMouseLeave={() => setActiveStars(stars)}
                                            onClick={() => setStars(2)}>
                                            <i className={activeStars >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                        </div>
                                    </tooltip>
                                    <tooltip title="It's okay">
                                        <div
                                            onMouseEnter={() => setActiveStars(3)}
                                            onMouseLeave={() => setActiveStars(stars)}
                                            onClick={() => setStars(3)}>
                                            <i className={activeStars >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                        </div>
                                    </tooltip>
                                    <tooltip title="Like it">
                                        <div
                                            onMouseEnter={() => setActiveStars(4)}
                                            onMouseLeave={() => setActiveStars(stars)}
                                            onClick={() => setStars(4)}>
                                            <i className={activeStars >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                        </div>
                                    </tooltip>
                                    <tooltip title="Love it">
                                        <div
                                            onMouseEnter={() => setActiveStars(5)}
                                            onMouseLeave={() => setActiveStars(stars)}
                                            onClick={() => setStars(5)}>
                                            <i className={activeStars >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                        </div>
                                    </tooltip>
                                </div>
                                <div>My review stars<span className="error">*</span></div>
                            </div>
                        </div>
                        {stars < 3 && <div className="low-review-help">
                            <p>Sorry your experience wasn't great</p>
                            <p>Click here to contact the shop owner</p>
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
                        <textarea className="review-text" type="text" placeholder={review === "" ? "Leave your review here" : ""}
                            onChange={e => setReview(e.target.value)}>
                            {
                                review === "" ? "" : review
                            }
                        </textarea>
                        <p>By submitting, you agree to Itsy's Review Policy</p>
                    </div>}
                {
                    reviewPage === 3 &&
                    <div className='review-step review-step-3'>
                        <p className="review-detail-review">{review}</p>
                        {stars ? <div>
                            <i className={stars >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={stars >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={stars >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={stars >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={stars >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                        </div> : <div>
                            <i className={currentStars >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={currentStars >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={currentStars >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={currentStars >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                            <i className={currentStars >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                        </div>}
                    </div>
                }
                <div className="review-button-container">
                    {reviewPage === 1 && <button type="button" className="back-button-review" onClick={closeModal}>Exit</button>}
                    {reviewPage === 2 && <button type="button" className="back-button" onClick={prevPage}>Go Back</button>}
                    {reviewPage === 1 && <button type="button" className="forward-button" onClick={nextPage}>Next</button>}
                    {reviewPage === 3 && <button type="button" className="back-button" onClick={prevPage}>Go Back</button>}
                    {reviewPage === 2 && <button type="button" className="forward-button" onClick={nextPage}>Next</button>}
                    {reviewPage === 3 && <button type="submit" className="forward-button" >Submit Your Review</button>}
                </div>

            </form>
        </div>
    )

}

export default ReviewFormModal
