import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessesReducer from './businesses_reducer';
import { reviewsReducer } from './reviews_reducer';
// import userProfileReducer from './user_profile_reducer';

export const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: businessesReducer,
    reviews: reviewsReducer,
    // profile: userProfileReducer,
});