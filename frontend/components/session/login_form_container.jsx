import React from 'react';
import { connect } from 'react-redux';
import { login, demoLogin } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    // errors: state.errors,
    errors: state.errors.session,
    formType: 'log in'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatchForm: (user) => dispatch(login(user)),
    demoLogin: (demo) => dispatch(demoLogin(demo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);