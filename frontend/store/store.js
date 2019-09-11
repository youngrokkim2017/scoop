import { createStore, applyMiddlware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

export const configureStore = (preloadedState = {}) => {
    createStore(rootReducer, preloadedState, applyMiddlware(thunk, logger));
}