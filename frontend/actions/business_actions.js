import * as APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

const receiveBusinesses = payload => ({
    type: RECEIVE_BUSINESSES, 
    payload
});

const receiveBusiness = payload => ({
    type: RECEIVE_BUSINESS,
    payload
});

export const fetchBusinesses = (filter) => dispatch => (
    APIUtil.fetchBusinesses(filter)
    .then(payload => dispatch(receiveBusinesses(payload)))
)

export const fetchBusiness = (id) => dispatch => (
    APIUtil.fetchBusiness(id)
    .then(payload => dispatch(receiveBusiness(payload)))
)

export const createBusiness = business => dispatch => (
    APIUtil.createBusiness(business)
    .then(businesses => (dispatch(receiveBusiness(businesses))))
)