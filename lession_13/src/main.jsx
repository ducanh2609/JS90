import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import { store } from "./redux/stores/store.js";
// import allReducers from "./redux/reducers/index.js"

// const store = createStore(allReducers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
