import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

// const mapStateToProps = ({ session, entities: { users } }) => ({
//     currentUser: users[session.id]
// });

const mapStateToProps = (state) => ({
    user: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);