import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllReviews } from "../../../store/reviewsReducer"
import OpenModalButton from "../../OpenModalButton"
import ReviewUpdateModal from "../ReviewUpdateModal"
import ReviewDeleteModal from "../ReviewDeleteModal"
import { useModal } from "../../../context/Modal"
import "./UserReviewPage.css"



const UserReviewPage = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.session.user)
    const allReviews = useSelector((state) => state.reviews.reviews)
    const allProducts = useSelector((state) => state.products)

    console.log(allProducts)

    let revArr = Object.values(allReviews)
    let prodArr = Object.values(allProducts)
    const returnProduct = (review) => {
        const thisProduct = prodArr.find((product) => {
            return product.id === review.productId
        })
        console.log(thisProduct)
        return thisProduct

    }

    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])
    const currentReviews = revArr.filter((review) => review?.userId === currentUser.id)
    if (!revArr.length) return null
    if (!prodArr.length) return null

    return (
        <div className="user-review-container">
            <h1>Your reviews</h1>
            <div className="user-review-container-sub">
                <div>
                    {currentReviews.map((review) => (
                        <div className="user-review-details" key={review.id}>
                            <hr></hr>
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
                <div>
                    <div className="help-small-business">
                        <div className="help-small-bus-title">Your reviews can help small business owners</div>
                        <div>
                            <ul>
                                <li>Your reviews on Itsy help shop owners by providing them instant feedback and allowing
                                    them to stock their shops with items their customers will love
                                </li>
                                <li>Your reviews on Itsy help shop owners by providing them instant feedback and allowing
                                    them to stock their shops with items their customers will love
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="help-small-business learn-more">
                        <div>Learn more about reviews</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserReviewPage
