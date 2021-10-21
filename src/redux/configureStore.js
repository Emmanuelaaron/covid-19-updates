import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countrysReducer from './countries/countries';

const reducer = combineReducers({
  countries: countrysReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
