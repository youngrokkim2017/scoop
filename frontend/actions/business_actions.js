import * as APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

export const receiveBusinesses = businesses => {
    type: RECEIVE_BUSINESSES, 
    businesses
}

export const receiveBusiness = business => {
    type: RECEIVE_BUSINESS,
    business
}

export const fetchBusinesses = () => dispatch => {
    APIUtil.fetchBusinesses()
    .then(receiveBusinesses => dispatch(receiveBusinesses(businesses)))
}

export const fetchBusiness = (id) => dispatch => {
    APIUtil.fetchBusiness(id)
    .then(receiveBusiness => dispatch(receiveBusiness(business)))
}

export const createBusiness = business => dispatch => (
    APIUtil.createBusiness(business)
    .then(businesses => (dispatch(receiveBusiness(businesses))))
)