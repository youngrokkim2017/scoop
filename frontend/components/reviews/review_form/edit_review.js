import React from 'react';
import { connect } from 'react-redux';
import { editReview, deleteReview } from '../../../actions/review_actions';
import { fetchBusiness, fetchBusinesses } from '../../../actions/business_actions';
import ReviewForm from './review_form';
// import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => { //???
    // let businessId = parseInt(ownProps.match.params.businessId);
    // let business = state.entities.business[businessId];
    let business = state.entities.businesses[ownProps.match.params.businessId];
    let review = state.entities.reviews[ownProps.match.params.id]

    return {
        review,
        business, 
        formType: 'edit',
        loggedIn: Boolean(state.session.id),
        // user: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = dispatch => ({
    action: (review) => dispatch(editReview(review)),
    delete: (reviewId) => dispatch(deleteReview(reviewId)),
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),

    // logout: () => dispatch(logout())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewForm);