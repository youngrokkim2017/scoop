import { fetchBusinesses } from './business_actions';
// import { getServers } from 'dns';

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
    type: CHANGE_FILTER,
    filter,
    value
});

// export const updateFilter = (filter, value) => (dispatch, getState) => {
//     // dispatch(changeFilter(filter, value));
//     // // return fetchBusinesses(getState().ui.filters)(dispatch);
//     // return fetchBusinesses(getState().filters)(dispatch);
// };

export const updateFilter = (filter, value) => {
    return (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
        return fetchBusinesses(getState().filters)(dispatch);
    };
}