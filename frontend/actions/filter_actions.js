import { fetchBusinesses } from './business_actions';

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
    type: CHANGE_FILTER,
    filter,
    value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchBusinesses(getState().ui.filters)(dispatch);
};