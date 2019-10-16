import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

export const reviewsReducer = (state = {}, action) => {
    Object.freeze(state); 
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_REVIEWS:
            // return action.payload.reviews;
            return action.reviews;
        case RECEIVE_REVIEW:
            // return Object.assign(newState, action.payload.review);
            return Object.assign(newState, action.review);
        case REMOVE_REVIEW:
            delete newState[action.reviewId];
        default: 
            return state;
    }
}