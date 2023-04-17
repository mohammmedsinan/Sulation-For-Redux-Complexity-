require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout/index";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import store from "./utilities/Store";
import { Provider } from "react-redux";
import { Dispatch } from "API";
import { ConfigProvider, theme } from "antd";

const app = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#ff8a8a',
        },
      }}
    >
      <Router>
        <Layout Dispatch={Dispatch} />
      </Router>
    </ConfigProvider>
  </Provider>,
  app
);
