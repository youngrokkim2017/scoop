import * as searchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_BUSINESSES = "RECEIVE_SEARCH_BUSINESSES";

// const receiveSearchBusinesses = (businesses) => ({
//     type: RECEIVE_SEARCH_BUSINESSES,
//     businesses
// });

const receiveSearchBusinesses = (payload) => ({
    type: RECEIVE_SEARCH_BUSINESSES,
    payload
});

export const getSearchedBusinesses = (input) => dispatch => (
    searchAPIUtil.getSearchedBusinesses(input)
        .then(payload => (dispatch(receiveSearchBusinesses(payload))))
)

// export const getSearchedBusinesses = (filter, value) => {
//     return (dispatch, getState) => {
//         dispatch(receiveSearchBusinesses(filter, value));
//         return receiveSearchBusinesses(getState().filters)(dispatch);
//     };
// }