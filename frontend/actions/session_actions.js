import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = user => dispatch => (
    APIUtil.login(user)
    .then(user => (
        dispatch(receiveCurrentUser(user))),
        error => (dispatch(receiveErrors(error.responseJSON)))
    )
)

export const logout = () => dispatch => (
    APIUtil.logout
        .then(() => (
            dispatch(logoutCurrentUser()))
        )
)

export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(user => (
            dispatch(receiveCurrentUser(user))),
            error => (dispatch(receiveErrors(error.responseJSON)))
        )
)

// logging in demo user ??
export const demoLogin = () => dispatch => {
    const demo = {
        firstName: "patrick",
        lastName: "kim",
        email:"patrick@email.com",
        password: "123456"
    }

    return (
        APIUtil.login(demo)
            .then((user) => (
                dispatch(receiveCurrentUser(user))),
                error => (dispatch(receiveErrors(error.responseJSON)))
            )
    );
}

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})