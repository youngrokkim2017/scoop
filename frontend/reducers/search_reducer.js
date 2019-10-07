import { RECEIVE_SEARCH_BUSINESSES } from '../actions/search_actions';
import search from '../components/search/search';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_BUSINESSES:
            return action.businesses;
        default:
            return state;
    }
}

export default searchReducer;