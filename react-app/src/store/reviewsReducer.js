export const LOAD_REVIEWS = '/reviewsReducer/loadReviews'
export const GET_REVIEW = '/reviewsReducer/loadReview'
export const ADD_REVIEW = '/reviewsReducer/addReview'
export const UPDATE_REVIEW = '/reviewsReducer/updateReview'
export const DELETE_REVIEW = '/reviewsReducer/deleteReview'
export const WAIT_REVIEWS = '/reviewsReducere/setWaitingReviews'

const loadReviews = reviews => {
    return {
        type: LOAD_REVIEWS,
        reviews
    }
}

const setWaitingReviews = reviews => {
    return {
        type: WAIT_REVIEWS,
        reviews
    }
}

const loadReview = review => {
    return {
        type: GET_REVIEW,
        review
    }
}

const addReview = review => {
    return {
        type: ADD_REVIEW,
        review
    }
}

const removeReview = reviewId => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

const putReview = review => {
    return {
        type: UPDATE_REVIEW,
        review
    }
}

export const getAllReviews = () => async (dispatch) => {
    const res = await fetch('/api/reviews')

    const reviews = await res.json();

    dispatch(loadReviews(reviews))
}


export const getOneReview = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`)
    const review = await res.json()
    dispatch(loadReview(review))
}


export const postReview = (productId, review) => async (dispatch) => {

    try {
        const res = await fetch(`/api/products/${productId}/reviews`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(review)
        });


        const reviewResponse = await res.json()
        if (res.ok) {
            dispatch(addReview(reviewResponse))
        } else {
            const errors = await res.json();
            return errors;
        }
    } catch (error) {
        const errors = await error.json();
        return errors;
    }
}

export const updateReview = (review) => async (dispatch) => {

    const res = await fetch(`/api/reviews/${review.id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review)
    })
    const oldReview = await res.json()
    oldReview.review = review.review
    oldReview.stars = review.stars
    oldReview.likes = review.likes

    dispatch(putReview(oldReview))
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })
    dispatch(removeReview(reviewId))

}

export const getWaitingReviews = () => async (dispatch) => {
    const response = await fetch(`/api/reviews/waitingReviews`)
    const res = await response.json()
    dispatch(setWaitingReviews(res))
}



const initialState = {
    reviews: {},
    review: {},
    waitingReviews: {}
}

export const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS:
            let reviewsState = { ...state }
            action.reviews.forEach(
                (review) => reviewsState.reviews[review.id] = review
            )
            return reviewsState
        case GET_REVIEW:
            newState = { ...state }
            newState.review = action.review
            return newState
        case ADD_REVIEW:
            newState = { ...state, reviews: { ...state.reviews } }
            newState.reviews[action.review.id] = action.review
            newState.review = action.review
            return newState
        case DELETE_REVIEW:
            newState = { ...state, reviews: { ...state.reviews } }
            delete newState.reviews[action.reviewId]
            return newState
        case UPDATE_REVIEW:
            newState = { ...state, reviews: { ...state.reviews } }
            newState.reviews[action.review.id] = action.review
            return newState
        case WAIT_REVIEWS:
            let waitState = {...state}
            for(let i = 0;i< action.reviews.length;i++){
                waitState.waitingReviews[i] = action.reviews[i]
            }
            return waitState
        default:
            return state;
    }
}
