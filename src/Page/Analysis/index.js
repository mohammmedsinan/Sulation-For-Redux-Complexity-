import React from "react";
import RouteRender from "./components/RouteRender";
import Layout from './components/layout'

function index() {
  return (
    <Layout>
      <RouteRender />
    </Layout>
  );
}

export default index;
