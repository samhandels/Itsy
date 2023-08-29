import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllReviews } from "../../../store/reviewsReducer"
import OpenModalButton from "../../OpenModalButton"
import ReviewFormModal from "../ReviewFormModal"
import { useModal } from "../../../context/Modal"


const UserReviewPage = () => {
    const currentUser = useSelector((state) => state.session.user)
    const dispatch = useDispatch()
    const allReviews = useSelector((state) => state.reviews.reviews)

    let revArr = Object.values(allReviews)

    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])
    if (!revArr.length) return null
    const currentReviews = revArr.filter((review) => review?.userId === currentUser.id)


    return (
        <>
            <h1>Your reviews</h1>
            {currentReviews.map((review) => (
                <div key={review.id}>
                    <p>ReviewId: {review.id}</p>
                    <p>Rating: {review.stars}</p>
                    <OpenModalButton
                        buttonText="Update"
                        modalComponent={<ReviewFormModal productId={review.productId} type={"update"} />}
                    />
                    <OpenModalButton
                        buttonText="Delete"
                        modalComponent={<ReviewFormModal />}
                    />
                </div>
            ))}

        </>
    )
}


export default UserReviewPage
