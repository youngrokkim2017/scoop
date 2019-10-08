import React from 'react';
import { connect } from 'react-redux';
import { login, signup, demoLogin } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    formType: 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatchForm: (user) => dispatch(signup(user)),
    demoLogin: (demo) => dispatch(demoLogin(demo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);