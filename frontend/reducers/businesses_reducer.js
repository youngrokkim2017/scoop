import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';
import { RECEIVE_SEARCH_BUSINESSES } from '../actions/search_actions';

const businessesReducer = (state = {}, action) => {
    Object.freeze(state);

    
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_BUSINESSES:
            return action.payload.businesses;
        case RECEIVE_BUSINESS:
            return Object.assign(newState, action.payload.businesses);
        case RECEIVE_SEARCH_BUSINESSES:
            return Object.assign({}, action.payload.businesses)
        default:
            return state;
    }
};

export default businessesReducer;

// switch(action.type) {
        //     case RECEIVE_BUSINESSES:
        //         return Object.assign({}, action.businesses)
        //     case RECEIVE_BUSINESS:
        //         return Object.assign({}, state, { [action.post.id]: action.business })            
        //     default:
        //         return state;
        // }