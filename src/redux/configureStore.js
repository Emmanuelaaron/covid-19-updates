import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import artworksReducer from './artworks/artworks';

const reducer = combineReducers({
  artworks: artworksReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
