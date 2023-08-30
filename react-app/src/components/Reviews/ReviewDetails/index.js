

const ReviewDetails = ({ review }) => {



    return (

                <div key={review.id}>
                    <p>ReviewId: {review.id}</p>
                    <p>Review: {review.review}</p>
                    <p>Rating: {review.stars}</p>
                    <OpenModalButton
                        buttonText="Update"
                        modalComponent={<ReviewUpdateModal productId={review.productId} type={"update"} reviewId={review.id} />}
                    />
                    <OpenModalButton
                        buttonText="Delete"
                        modalComponent={<ReviewDeleteModal reviewId={review.id} />}
                    />
                </div>
        
    )
}
