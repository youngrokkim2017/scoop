import { combineReducers } from 'redux';
import { sessionsReducers, sessionReducer } from './session_reducer';
import { entitiesReducers } from './entities_reducer';
import { errorsReducers } from './errors_reducer';
import { filtersReducer } from './filter_reducer';

const rootReducer = combineReducers({
    session: sessionsReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    filter: filterReducer
});

export default rootReducer;