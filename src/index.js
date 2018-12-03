// react, react-dom
import React from "react";
import ReactDOM from "react-dom";
//CSS
import "materialize-css/dist/css/materialize.min.css";

// app component
import App from "./components/App";
import Root from "./Root";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById("root")
);
