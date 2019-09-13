import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';

export const businessesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_BUSINESSES:
            return Object.assign({}, action.businesses)
        case RECEIVE_BUSINESS:
            return Object.assign({}, state, { [action.post.id]: action.business })            
        default:
            return state;
    }
}