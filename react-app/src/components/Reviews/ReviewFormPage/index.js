import { useEffect, useReducer, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import OpenModalButton from '../../OpenModalButton'
import ReviewFormModal from '../ReviewFormModal'
import ReviewUpdateModal from '../ReviewUpdateModal'
import ReviewDeleteModal from '../ReviewDeleteModal'
import './ReviewFormPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReviews } from '../../../store/reviewsReducer'



const ReviewFormPage = ({ productId }) => {
    const [rating, setRating] = useState()
    const [activeRating, setActiveRating] = useState()
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch()

    const reviews = useSelector((state) => state.reviews.reviews)
    const revArr = Object.values(reviews)


    const productReviews = revArr.filter((review) => review?.productId === productId)

    let userLeftReview = false;


    for (let i = 0; i < productReviews.length; i++) {
        if (productReviews[i].userId === user.id) {

            userLeftReview = true
        }
    }
    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])


    return (
        <div className="review-container">
            {!userLeftReview && <OpenModalButton
                buttonText={<form className="review-component"
                >
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
                modalComponent={<ReviewFormModal productId={productId} type={"create"} />}
            />}
            {productReviews.map((review) => (
                <div className="review-details">
                    <div className="mini-modal-stars-area">
                        <div> <i className={review?.stars > 0 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                        <div> <i className={review?.stars > 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                        <div> <i className={review?.stars > 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                        <div> <i className={review?.stars > 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                        <div> <i className={review?.stars > 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                    </div>
                    <div>
                        <div>{review.review}</div>
                    </div>
                    <div>
                        <div>{review.username}</div>
                        <div>{review.createdAt}</div>
                    </div>

                    {review.username === user.username ?
                        <div className="review-detail-button-container-prod">
                            <OpenModalButton
                                buttonText="Update"
                                modalComponent={<ReviewUpdateModal productId={review.productId} reviewId={review.id} />}
                            />
                            <OpenModalButton
                                buttonText="Delete"
                                modalComponent={<ReviewDeleteModal reviewId={review.id} />}
                            />
                        </div> :
                        <div>
                            <i class="fa-solid fa-thumbs-up"></i> 2 Helpful?
                        </div>
                    }
                </div>
            ))}
        </div >
    )

}

export default ReviewFormPage
