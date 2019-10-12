import React from 'react';
import { connect } from 'react-redux';
import { editReview } from '../../../actions/review_actions';
import { fetchBusiness, fetchBusinesses } from '../../../actions/business_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => { //???
    // let businessId = parseInt(ownProps.match.params.businessId);
    // let business = state.entities.business[businessId];
    let business = state.entities.businesses[ownProps.match.params.businessId];

    return ({
        // businessId,
        business,
        // reviews: business.reviews,
        formType: 'edit',
        loggedIn: Boolean(state.session.id)
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