import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';
import { changeFilter, updateFilter } from '../../actions/filter_actions';
import { getSearchedBusinesses } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.id],
    // user: state.entities.profile[ownProps.match.params.id],
    currentUserId: state.session.id,
    loggedIn: Boolean(state.session.id),
    searchResults: Object.values(state.search)
});

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    getSearchedBusinesses: (input) => dispatch(getSearchedBusinesses(input)),
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);