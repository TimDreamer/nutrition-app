import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

////////////////////////////////////////////////////////
// Get data

fetch("/api/nutritions")
  .then((res) => res.json())
  .then((data) => console.log(data));

////////////////////////////////////////////////////////
// Render
ReactDOM.render(<App />, document.getElementById("root"));
// getData();
