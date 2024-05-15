import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import store from "./redux/store.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
