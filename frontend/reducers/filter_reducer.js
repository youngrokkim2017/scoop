import { UPDATE_FILTER, CHANGE_FILTER } from '../actions/filter_actions';

const defaultFilters = {
    bounds: {},
    find: "",
    near: ""
}   

export const filterReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case CHANGE_FILTER:
            newState[action.filter] = action.value
            return newState;
        default:
            return state;
    }
}

// export default filterReducer;