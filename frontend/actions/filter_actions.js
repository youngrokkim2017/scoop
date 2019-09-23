import { fetchBusinesses } from './business_actions';
import { get } from 'http';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateBounds = (filter, value) => ({
    type: UPDATE_BOUNDS,
    filter,
    value
});

// export const updateFilter = (filter, value) => (dispatch, getState) => {
//     dispatch(changeFilter(filter, value));
//     return fetchBusinesses(getState().ui.filters)(dispatch);
// }

export const updateFilter = (filter, value) => {
    return (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
        return fetchBusinesses(getState().filters)(dispatch);
    };
}