import { combineReducers } from 'redux';
import { sessionReducers, sessionReducer } from './session_reducer';
import { entitiesReducers } from './entities_reducer';
import { errorsReducers } from './errors_reducer';

export const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer
})