import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { foodReducer, consumeReducer } from "./reducers";

import App from "./components/App";

////////////////////////////////////////////////////////
// Configure Redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ foodList: foodReducer, consume: consumeReducer }),
  composeEnhancers(applyMiddleware(reduxThunk)) // for async function
);

////////////////////////////////////////////////////////
// Render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
