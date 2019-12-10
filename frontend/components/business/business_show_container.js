import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import BusinessShow from './business_show';
import { fetchReviews } from '../../actions/review_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    // businesses: state.entities.businesses[ownProps.match.params.businessId]
    // businessId: ownProps.match.params.businessId
    // currentUser: state.session.currentUser
    // reviews: state.entities.reviews,
    currentUser: state.entities.users[state.session.id],
    reviews: Object.values(state.entities.reviews),
    loggedIn: Boolean(state.session.id),
    searchResults: Object.values(state.search)
});

const mapDispatchToProps = dispatch => ({
    fetchBusiness: id => dispatch(fetchBusiness(id)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    getSearchedBusinesses: (input) => dispatch(getSearchedBusinesses(input)),
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusinessShow);