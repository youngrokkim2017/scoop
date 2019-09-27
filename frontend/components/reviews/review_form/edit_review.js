import React from 'react';
import { connect } from 'react-redux';
import { updateReview } from '../../../actions/review_actions';
import { fetchBusinesses } from '../../../actions/business_actions';
import ReviewForm from './review_form';

const mapStateToProps = (sate, ownProps) => { //???
    let businessId = parseInt(ownProps.match.params.businessId);
    let business = state.entities.business[businessId];

    return ({
        businessId,
        business,
        reviews: business.reviews,
        formType: 'edit'
    });
}

const mapDispatchToProps = dispatch => ({
    action: (review) => dispatch(createReview(review)),
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewForm);