import { Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
import MenuS from "../../Components/menu";
import { Layout } from "antd";
import HeaderS from "../../Components/header";
import FooterS from "../../Components/footer";
import BreadCrumb from "../../Components/breadcrumb";

function BaseLayout({ child }) {
  const [darkMode, setDarkMode] = React.useState(true);
  const { Content } = Layout;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuS />
      <Layout>
        <HeaderS />
        <Content style={{ margin: "0 16px" }}>
          <BreadCrumb />
          {child}
        </Content>
        <FooterS />
      </Layout>
    </Layout>
  );
}

export default BaseLayout;
