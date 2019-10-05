import * as ReviewAPIUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';


const receiveReviews = (payload) => ({
    type: RECEIVE_REVIEWS,
    payload
})

const receiveReview = (payload) => ({
    type: RECEIVE_REVIEW,
    payload
})

const removeReview = (payload) => ({
    type: REMOVE_REVIEW,
    payload
})

export const fetchReviews = (businessId) => (dispatch) => (
    ReviewAPIUtil.fetchReviews(businessId)
    .then((payload) => dispatch(receiveReviews(payload)))
)

// export const fetchReview = (businessId) => (dispatch) => (
//     ReviewAPIUtil.fetchReview(businessId)
//         .then((review) => dispatch(removeReview(review)))
// )

export const createReview = (review) => (dispatch) => (
    ReviewAPIUtil.createReview(review)
        .then((payload) => dispatch(receiveReview(payload)))
)

export const updateReview = (reviewId) => (dispatch) => (
    ReviewAPIUtil.updateReview(reviewId)
        .then((review) => dispatch(receiveReview(review)))
)

export const deleteReview = (reviewId) => (dispatch) => (
    ReviewAPIUtil.deleteReview(reviewId)
        .then((review) => dispatch(receiveReview(review)))
)