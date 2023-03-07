import React from "react";
import { createRoot } from "react-dom/client";
import BaseRouter from "./router";
import "./assets/base.scss";
import { Provider } from "react-redux";
import store from "./store/index";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: "#20d18b",
        },
      }}
    >
      <BaseRouter></BaseRouter>
    </ConfigProvider>
  </Provider>
);
