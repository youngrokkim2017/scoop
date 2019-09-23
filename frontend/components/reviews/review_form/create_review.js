import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../../../actions/review_actions';
import { fetchBusinesses } from '../../../actions/business_actions';
import ReviewForm from './review_form';

const mapsStateToProps = (sate, ownProps) => { //???
    let businessId = parseInt(ownProps.match.params.businessId);
    let business = state.entities.business[businessId];

    return ({
        businessId,
        business,
        reviews: business.reviews,
        formType: 'create'
    });
}

const mapDispatchToProps = dispatch => ({
    action: (review) => dispatch(createReview(review)),
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
})

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(ReviewForm);