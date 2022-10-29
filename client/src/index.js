require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './Redux/Store';
import { Provider } from 'react-redux';
import 'antd/dist/antd.less'; // or 'antd/dist/antd.less'

const app = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>,
  app,
);
