import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { BrowserRouter as Router} from 'react-router-dom'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "./reducers";

import './index.css';
import App from './App';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

const store = createStore(
  rootReducer,
  enhancer,
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
