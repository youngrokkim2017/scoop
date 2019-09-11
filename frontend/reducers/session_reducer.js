import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const initialState = { id: null };

export const sessionReducer = (tate = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState.id = action.currentUser.id;
            return newState;
        case LOGOUT_CURRENT_USER:
            return initialState;
        default:
            return state;
    }
}