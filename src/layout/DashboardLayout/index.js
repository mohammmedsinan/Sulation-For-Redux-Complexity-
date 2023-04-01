import { Routes, Route } from 'react-router-dom';
import React from 'react';
import MenuS from '../../Components/menu';
import { Card, Layout } from 'antd';
import HeaderS from '../../Components/header';
import FooterS from '../../Components/footer';
import BreadCrumb from '../../Components/breadcrumb';

function BaseLayout({ child }) {
  const { Content } = Layout;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MenuS />
      <Layout>
        <HeaderS />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <BreadCrumb />
          {child}
        </Content>
        <FooterS />
      </Layout>
    </Layout>
  );
}

export default BaseLayout;
