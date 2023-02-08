import { Routes, Route } from 'react-router-dom';
import React from 'react';
import MenuS from '../../Component/menu';
import { Card, Layout } from 'antd';
import HeaderS from '../../Component/header';
import FooterS from '../../Component/footer';
import BreadCrumb from '../../Component/breadcrumb';

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
          <Routes>
            <Route path="*" element={child} />
          </Routes>
        </Content>
        <FooterS />
      </Layout>
    </Layout>
  );
}

export default BaseLayout;
