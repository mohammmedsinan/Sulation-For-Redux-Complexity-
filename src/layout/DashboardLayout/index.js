import { Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
import MenuS from "../../Components/menu";
import { Button, Layout } from "antd";
import HeaderS from "../../Components/header";
import FooterS from "../../Components/footer";
import BreadCrumb from "../../Components/breadcrumb";
import { toggle } from '../../utilities/GlobalReducer'
import {useDispatch,useSelector} from 'react-redux'

function BaseLayout({ child }) {
  const [darkMode, setDarkMode] = React.useState(true);
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  const { Content } = Layout;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuS />
      <Layout>
        <HeaderS />
        <Content style={{ margin: "0 16px" }}>
          <BreadCrumb />
          {child}
          <Button onClick={() =>dispatch(toggle())}>Toggle</Button>
        </Content>
        <FooterS />
      </Layout>
    </Layout>
  );
}

export default BaseLayout;
