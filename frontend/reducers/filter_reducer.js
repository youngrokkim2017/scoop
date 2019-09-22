import { UPDATE_FILTER, UPDATE_BOUNDS } from '../actions/filter_actions';

const defaultFilters = {
    bounds: {},
    found: "",
    nearby: ""
}   

const filterReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case UPDATE_BOUNDS:
            newState[action.filter] = action.value
            return newState;
        default:
            return state;
    }
}

export default filterReducer