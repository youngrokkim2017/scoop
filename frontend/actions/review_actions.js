import * as ReviewAPIUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';


const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = (review) => ({
    type: REMOVE_REVIEW,
    review
})

export const fetchReviews = (businessId) => (dispatch) => (
    ReviewAPIUtil.fetchReviews(businessId)
    .then((reviews) => dispatch(receiveReviews(reviews)))
)

export const fetchReview = (businessId) => (dispatch) => (
    ReviewAPIUtil.fetchReview(businessId)
        .then((review) => dispatch(removeReview(review)))
)

export const createReview = (review) => (dispatch) => (
    ReviewAPIUtil.createReview(review)
        .then((review) => dispatch(receiveReview(review)))
)

export const updateReview = (reviewId) => (dispatch) => (
    ReviewAPIUtil.updateReview(reviewId)
        .then((review) => dispatch(receiveReview(review)))
)

export const deleteReview = (reviewId) => (dispatch) => (
    ReviewAPIUtil.deleteReview(reviewId)
        .then((review) => dispatch(receiveReview(review)))
)