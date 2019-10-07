import * as searchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_BUSINESSES = "RECEIVE_SEARCH_BUSINESSES";

const receiveSearchBusinesses = (businesses) => ({
    type: RECEIVE_SEARCH_BUSINESSES,
    businesses
});

export const getBusinesses = (input) => dispatch => (
    searchAPIUtil.searchBusinesses(input)
        .then(businesses => (dispatch(receiveSearchBusinesses(businesses))))
)