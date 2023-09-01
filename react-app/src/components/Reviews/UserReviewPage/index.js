import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllReviews, getWaitingReviews } from "../../../store/reviewsReducer"
import OpenModalButton from "../../OpenModalButton"
import ReviewUpdateModal from "../ReviewUpdateModal"
import ReviewDeleteModal from "../ReviewDeleteModal"
import { useModal } from "../../../context/Modal"
import { getTransactionItemsThunk } from "../../../store/transactionReducer"

import "./UserReviewPage.css"



const UserReviewPage = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.session.user)
    const allReviews = useSelector((state) => state.reviews.reviews)
    const allProducts = useSelector((state) => state.products)
    const transactions = useSelector((state) => state.transactions.transactions)
    const waitingReviews = useSelector((state) => state.reviews.waitingReviews)


    const transArr = Object.values(transactions)
    let userPurchases = transArr.filter((trans) => trans.userId === currentUser.id)

    let revArr = Object.values(allReviews)
    let prodArr = Object.values(allProducts)

    let waitRevArr = Object.values(waitingReviews)

    const returnProduct = (review) => {
        const thisProduct = prodArr.find((product) => {
            return product.id === review.productId
        })
        return thisProduct
    }

    const returnProductById = (id) => {
        const thisProduct = prodArr.find((product) => {
            return product.id === id
        })
        return thisProduct
    }



    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])

    useEffect(() => {
        dispatch(getTransactionItemsThunk())
    }, [dispatch])

    useEffect(() => {
        dispatch(getWaitingReviews())
    }, [dispatch])

    const currentReviews = revArr.filter((review) => review?.userId === currentUser.id)
    const currentReviewProductIds = currentReviews.map((review) => review.productId)
    const currentUserReviewProductIds = userPurchases.map((purchase) => purchase.productId)


    let noReviews = []
    if (!revArr.length) return null
    if (!prodArr.length) return null
    if (!transArr.length) return null
    for (let i = 0; i < waitRevArr.length; i++) {
        noReviews.push(prodArr[waitRevArr[i] - 1])
        // let found = false;
        // for (let j = 0; j < currentUserReviewProductIds.length; j++) {
        //     if (waitRevArr[i] === currentUserReviewProductIds[j]) {
        //         found = true
        //         break;
        //     }
        // }
        // if (!found) {
        //     if (!noReviews.includes(waitRevArr[i])) {
        //         noReviews.push(waitRevArr[i])
        //     }
        // }
    }


    return (
        <div className="user-review-container">
            <div id='user-review-inner-div-container'>

                <div id='my-reviews-page-sign'>My Reviews</div>
                <div id='review-line'></div>
                <div id='review-butt'>
                    Manage all your reviews
                </div>


                <div className="user-review-container-sub">
                    <div>
                        <div>
                            <div>Unreviewed items</div>
                            {noReviews.map((purchase) => (
                                <div>
                                    <div>{purchase.name}</div>
                                    <img className="review-product-img" src={purchase.product_image}></img>
                                </div>
                            ))}
                        </div>
                        <div id='individual-review-holder-Review-Page'>
                            {currentReviews.map((review) => (
                                <div className="user-review-details" key={review.id}>
                                    <div className="review-product-info">
                                        <img className="review-product-img" src={returnProduct(review).product_image}></img>
                                        <div className="review-product-text">
                                            <div>{returnProduct(review).name}</div>
                                            <div><span className="not-bold">Shop Owner: </span>{returnProduct(review).ownerName}</div>
                                            {review.createdAt && <div>Review Posted: {review.createdAt}</div>}
                                        </div>
                                    </div>
                                    <div className="user-review-stars">Your rating:
                                        <div className="mini-modal-stars-area">
                                            <div> <i className={review?.stars > 0 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                                            <div> <i className={review?.stars > 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                                            <div> <i className={review?.stars > 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                                            <div> <i className={review?.stars > 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                                            <div> <i className={review?.stars > 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></i></div>
                                        </div>
                                    </div>
                                    <div className="user-review-stars">Your review: {review.review}</div>
                                    <div className="review-detail-button-container">
                                        <OpenModalButton
                                            buttonText="Update"
                                            modalComponent={<ReviewUpdateModal productId={review.productId} reviewId={review.id} />}
                                        />
                                        <OpenModalButton
                                            buttonText="Delete"
                                            modalComponent={<ReviewDeleteModal reviewId={review.id} />}
                                        />
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div id='help-small-business-outer-div'>
                        <div className="help-small-business">
                            <div className="help-small-bus-title">Your reviews on Itsy help shop owners by providing them instant feedback and allowing
                                them to stock their shops with items their customers will love. Thank you for supporting these small business owners.</div>

                        </div>
                        {/* <div className="help-small-business learn-more">
                        <div>Learn more about reviews</div>
                    </div> */}
                    </div>
                </div>




            </div>
        </div>
    )
}


export default UserReviewPage
