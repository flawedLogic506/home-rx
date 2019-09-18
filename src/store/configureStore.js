import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import housesReducer from '../reducers/houses';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      houses: housesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};