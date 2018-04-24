import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {createLogger} from 'redux-logger';

import data from './reducer/data';

let enhancer;

const reducer = combineReducers({ data });

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();
  enhancer = composeEnhancers(
    applyMiddleware(logger),
    // other store enhancers if any
  );
  // enhancer = compose(
  //   applyMiddleware(logger),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Hook for Redux DevTools Extension. see https://github.com/zalmoxisus/redux-devtools-extension
  // )
}

export default createStore(reducer, enhancer);
