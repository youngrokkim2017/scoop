import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
// import { fetchBusinesses } from '../../actions/business_actions';

// const mapStateToProps = ({ session, entities: { users } }) => ({
//     currentUser: users[session.id]
// });

const mapStateToProps = (state) => ({
    user: state.entities.users[state.session.id],
    loggedIn: Boolean(state.session.id),
    // businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    // fetchBusinesses: () => dispatch(fetchBusinesses()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);