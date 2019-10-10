import * as searchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_BUSINESSES = "RECEIVE_SEARCH_BUSINESSES";

// const receiveSearchBusinesses = (businesses) => ({
//     type: RECEIVE_SEARCH_BUSINESSES,
//     businesses
// });

const receiveSearchBusinesses = (businesses) => ({
    type: RECEIVE_SEARCH_BUSINESSES,
    businesses
    // filter,
    // value
});

export const getSearchedBusinesses = (input) => dispatch => (
    searchAPIUtil.getSearchedBusinesses(input)
        .then(businesses => (dispatch(receiveSearchBusinesses(businesses))))
)

// export const getSearchedBusinesses = (filter, value) => {
//     return (dispatch, getState) => {
//         dispatch(receiveSearchBusinesses(filter, value));
//         return receiveSearchBusinesses(getState().filters)(dispatch);
//     };
// }