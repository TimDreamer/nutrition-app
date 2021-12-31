import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import foodReducer from "./reducers/foodReducer";
import consumeReducer from "./reducers/consumeReducer";
import { loadDB } from "./actions/foods";

import App from "./components/App";

// for console debug
console.clear();

////////////////////////////////////////////////////////
// Configure Redux
const store = createStore(
  combineReducers({ foodList: foodReducer, consume: consumeReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

////////////////////////////////////////////////////////
// Get data
fetch("/api/nutritions")
  .then((res) => res.json())
  .then((data) => store.dispatch(loadDB(data)));

////////////////////////////////////////////////////////
// Render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
