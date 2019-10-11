import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { login, demoLogin } from '../../actions/session_actions';
import { getSearchedBusinesses } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
        currentUser: state.entities.users[state.session.id],
        loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    demoLogin: (demo) => dispatch(demoLogin(demo)),
    getSearchedBusinesses: (input) => dispatch(getSearchedBusinesses(input))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);