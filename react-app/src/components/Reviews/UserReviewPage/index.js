import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllReviews } from "../../../store/reviewsReducer"

const UserReviewPage = () => {
    const currentUser = useSelector((state) => state.session.user)
    const dispatch = useDispatch()
    const allReviews = useSelector((state) => state.reviews.reviews)

    let revArr;
    if (allReviews) revArr = Object.values(allReviews)

    const currentReviews = allReviews.filter((review) => review?.userId === currentUser.id)

    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])

    return (
        <>
            <h1>Your reviews</h1>
            {currentReviews.map((review) => (
                <div>
                    <p>ReviewId: {review.id}</p>
                    <p>Rating: {review.stars}</p>
                </div>
            ))}

        </>
    )
}


export default UserReviewPage
