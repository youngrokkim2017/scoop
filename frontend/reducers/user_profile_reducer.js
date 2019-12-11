import { RECEIVE_USER } from '../actions/user_actions';

const userProfileReducer = (state ={}, action) => {
    Object.freese(state);

    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        default:
            return state;
    }
}

export default userProfileReducer;