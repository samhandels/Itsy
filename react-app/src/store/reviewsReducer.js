export const LOAD_REVIEWS = '/reviewsReducer/loadReviews'
export const GET_REVIEW = '/reviewsReducer/loadReview'
export const ADD_REVIEW = '/reviewsReducer/addReview'
export const UPDATE_REVIEW = '/reviewsReducer/updateReview'
export const DELETE_REVIEW = '/reviewsReducer/deleteReview'

const loadReviews = reviews => {
    return {
        type: LOAD_REVIEWS,
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

const updateReview = review => {
    return {
        type: UPDATE_REVIEW,
        review
    }
}

const deleteReview = reviewId => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}


const initialState = {
    reviews: {},
    review: {}
}

const spotsReducer = (state = initialState, action = action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS:
            const reviewsState = { ...state, reviews: { ...state.reviews }, review: { ...state.review } }
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
            newState.review.reviews[action.review.id] = action.review
            newState.review = action.review
            return newState
        case DELETE_REVIEW:
            newState = { ...state, reviews: { ...state.reviews } }
            delete newState.reviews[action.reviewId]
            return newState
        case UPDATE_REVIEW:
            newState = { ...state, reviews: { ...state.reviews } }
            newState.reviews[action.reviewId] = action.reviewId
            return newState
        default:
            return state;
    }
}

export default spotsReducer;
