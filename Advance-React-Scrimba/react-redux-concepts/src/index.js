import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store-react/count";
import { increment } from "./store-react/count";

// react-redux dependency provides ways to include redux in our react app.
// Provider provides store capabilities to the components below it (App -> C1 -> C2).
// We can then consume store in all the components.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
