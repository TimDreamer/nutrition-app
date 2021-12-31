import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import foodReducder from "./reducers/foodReducer";
import { loadDB } from "./actions/foods";

import App from "./components/App";

////////////////////////////////////////////////////////
// Configure Redux
const store = createStore(
  combineReducers({ foodList: foodReducder }),
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
