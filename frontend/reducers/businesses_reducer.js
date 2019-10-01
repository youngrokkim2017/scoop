import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';

const businessesReducer = (state = {}, action) => {
    Object.freeze(state);

    
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            return Object.assign(newState, action.business);
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