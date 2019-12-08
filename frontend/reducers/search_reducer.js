import { RECEIVE_SEARCH_BUSINESSES } from '../actions/search_actions';
import search from '../components/search/search';

const searchReducer = (state = {}, action) => {
    // debugger
    
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_BUSINESSES:
            return Object.assign({}, action.payload.businesses);
            // return action.businessRes;
        default:
            return state;
    }
}

export default searchReducer;