require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import {createRoot} from "react-dom/client";
import Layout from "./layout/index";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import store from "./utilities/Store";
import { Provider } from "react-redux";
import { Dispatch } from "API";
import './utilities/main.css'
const app = document.getElementById("root");


const root = createRoot(app)
root.render(
  <Provider store={store}>
      <Router>
        <Layout Dispatch={Dispatch} />
      </Router>
  </Provider>
)
