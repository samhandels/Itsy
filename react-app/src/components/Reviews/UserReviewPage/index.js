import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllReviews, getWaitingReviews } from "../../../store/reviewsReducer"
import OpenModalButton from "../../OpenModalButton"
import ReviewUpdateModal from "../ReviewUpdateModal"
import ReviewDeleteModal from "../ReviewDeleteModal"
import { useModal } from "../../../context/Modal"
import { getTransactionItemsThunk } from "../../../store/transactionReducer"

import "./UserReviewPage.css"
import { fetchProducts } from "../../../store/productsReducer"
import { ProductCard } from "../../ProductCard"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import ReviewFormModal from "../ReviewFormModal"
import { LeaveReviewPrompt } from "./helpsmallbusiness"



const UserReviewPage = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.session.user)
    const allReviews = useSelector((state) => state.reviews.reviews)
    const allProducts = useSelector((state) => state.products)
    const transactions = useSelector((state) => state.transactions.transactions)
    const waitingReviews = useSelector((state) => state.reviews.waitingReviews)
    const history = useHistory()

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


    useEffect(() => {
        dispatch(getAllReviews())
        dispatch(fetchProducts())
        dispatch(getTransactionItemsThunk())
        // dispatch(getWaitingReviews())
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
        // console.log("WHAT", prodArr[waitRevArr[i] - 1])
    }

    // console.log("REVIEWID", noReviews[0].id)

    return (
        <div className="user-review-container">
            <div id='user-review-inner-div-container'>

                <div id='my-reviews-page-sign'>{currentUser.firstName}'s Reviews</div>
                <div id='review-line'></div>
                <div id='review-butt'>
                    Manage all your reviews
                </div>


                <div className="user-review-container-sub">

                    <div id='individual-review-holder-Review-Page'>
                        {currentReviews.map((review) => (
                            <div className="user-review-details" key={review.id}>
                                <div className="review-product-info">
                                    <Link to={`/products/${review.productId}`} ><img className="review-product-img" src={returnProduct(review).image}></img></Link>
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
                    {/* <LeaveReviewPrompt noReviews={noReviews}/> */}
                    <div id='help-small-business-outer-div'>
                        <div className="help-small-business">
                            <div className="help-small-bus-title">Your reviews on Itsy help shop owners by providing them instant feedback and allowing
                                them to stock their shops with items their customers will love.</div>
                            {/* {noReviews.length ? <div>
                                <div id='unreviewed-line'></div>
                                <div className="unreviewed-title">Unreviewed items</div>

                                <div id='unreviewed-items-div'>

                                {noReviews?.map((purchase) => (
                                    <OpenModalButton
                                        buttonText={<div className="unreviewed-purchases">
                                            <div><img className="unreview-product-img" src={purchase.product_image}></img></div>
                                            <div className='unrev-prod-info'>
                                                <div>{purchase.name}</div>
                                                <div>Purchased from: {purchase.ownerName}</div>
                                            </div>
                                        </div>}
                                        modalComponent={<ReviewFormModal productId={purchase.id} />}
                                    />))}


                                </div>
                            </div> : <div></div>} */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default UserReviewPage
