import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../../../actions/review_actions';
import { fetchBusiness, fetchBusinesses } from '../../../actions/business_actions';
import ReviewForm from './review_form';
import { logout } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => { //???
    let businessId = parseInt(ownProps.match.params.businessId);
    // let business = state.entities.business[businessId];
    let business = state.entities.businesses[ownProps.match.params.businessId];
    let businesses = Object.values(state.entities.businesses);

    return {
        businessId,
        business,
        businesses,
        // reviews: business.reviews,
        formType: 'create',
        loggedIn: Boolean(state.session.id),
        // user: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = dispatch => ({
    action: (review) => dispatch(createReview(review)),
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    logout: () => dispatch(logout())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewForm);