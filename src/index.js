import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";

import configureStore from "./store/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/main.css";

import "./assets/css/cartStyle.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
