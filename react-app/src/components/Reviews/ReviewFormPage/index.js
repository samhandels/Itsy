

import { useEffect, useReducer, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import OpenModalButton from '../../OpenModalButton'
import ReviewFormModal from '../ReviewFormModal'
import ReviewUpdateModal from '../ReviewUpdateModal'
import ReviewDeleteModal from '../ReviewDeleteModal'
import './ReviewFormPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReviews, updateReview } from '../../../store/reviewsReducer'
import { fetchProducts } from '../../../store/productsReducer'
import { getTransactionItemsThunk } from '../../../store/transactionReducer'



const ReviewFormPage = ({ productId }) => {
    // console.log(productId)
    const [rating, setRating] = useState()
    const [activeRating, setActiveRating] = useState()
    const [showLikes, setShowLikes] = useState(true)
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch()

    const reviews = useSelector((state) => state.reviews.reviews)
    const products = useSelector((state) => state.products)
    const transactions = useSelector((state) => state.transactions.transactions)
    const revArr = Object.values(reviews)
    const transArr = Object.values(transactions)

    let userTransactions
    if (user) {
        userTransactions = transArr.filter((trans) => trans.userId === user.id)
    }
    // console.log("USERTRANSACTIONS", userTransactions)
    let purchasedItem = false;


    userTransactions?.forEach((transaction) => {
        if (transaction.productId == productId) {
            purchasedItem = true
        }
    })
    const prodArr = Object.values(products)

    const productReviews = revArr.filter((review) => review?.productId === productId)
    const thisProduct = prodArr[productId]



    const userLikes = []

    const handleLikes = (e) => {
        e.preventDefault()
        let reviewId = e.target.title
        let rev = revArr.filter((review) => review.id == reviewId)
        userLikes.push(user.id)
        rev[0].likes += 1
        setShowLikes(false)
        dispatch(updateReview(rev[0]))
    }


    let userLeftReview = false;

    let isMyProduct = false
    // console.log(thisProduct)
    if (thisProduct?.ownerId === user?.id) {
        isMyProduct = true
    }



    for (let i = 0; i < productReviews.length; i++) {
        if (productReviews[i].userId === user?.id) {

            userLeftReview = true
            break;
        }

    }
    useEffect(() => {
        dispatch(getAllReviews())
        dispatch(getTransactionItemsThunk)
    }, [dispatch])

    return (
        <div className="review-container">
            {!isMyProduct ? userLeftReview == false && purchasedItem && <OpenModalButton
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
                modalComponent={<ReviewFormModal currentStars={activeRating} productId={productId} />}
            /> : productReviews.length ? <div className="is-my-product">Here is what your shoppers had to say: </div> : <div>No reviews yet</div>}

            <div id='reviews-holder-ReviewFormPage'>

                {productReviews.map((review) => (
                    <div className="review-details">
                        <div className="mini-modal-stars-area">
                            <div> <i id='stars-ReviewFormPage' className={review?.stars > 0 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                            <div> <i id='stars-ReviewFormPage' className={review?.stars > 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                            <div> <i id='stars-ReviewFormPage' className={review?.stars > 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                            <div> <i id='stars-ReviewFormPage' className={review?.stars > 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                            <div> <i id='stars-ReviewFormPage' className={review?.stars > 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                        </div>
                        <div>
                            <div id="review-ReviewFormPage">{review.review}</div>
                        </div>
                        <div>
                            <div>{review.username}</div>
                            <div id='createdAt-ReviewFormPage'>{review.createdAt}</div>
                        </div>

                        {review.username === user?.username ?
                            <div className="review-detail-button-container-prod">
                                <OpenModalButton
                                    buttonText="Update"
                                    modalComponent={<ReviewUpdateModal currentStars={review.stars} productId={review.productId} reviewId={review.id} />}
                                />
                                <OpenModalButton
                                    buttonText="Delete"
                                    modalComponent={<ReviewDeleteModal reviewId={review.id} />}
                                />
                            </div> :
                            <div>
                                {/* {showLikes ?
                                    <div className="likes-container">
                                        <i onClick={handleLikes} className="fa-solid fa-thumbs-up" title={review.id}></i>

                                        <div className="after-thumb"> {review.likes} helpful? </div>
                                    </div> :
                                    <div>
                                        <div className="after-thumb"> {review.likes} helpful-- thanks for your feedback!</div>
                                    </div>
                                } */}
                            </div>
                        }
                    </div>
                ))}



            </div>



        </div >
    )

}

export default ReviewFormPage
