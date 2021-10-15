import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countrysReducer from './countries/countries';

const reducer = combineReducers({
  countries: countrysReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
