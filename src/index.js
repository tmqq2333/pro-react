import React from "react";
import { createRoot } from "react-dom/client";
import BaseRouter from "./router";
import "./assets/base.scss";
import { Provider } from "react-redux";
import store from "./store/index";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BaseRouter></BaseRouter>
  </Provider>
);
