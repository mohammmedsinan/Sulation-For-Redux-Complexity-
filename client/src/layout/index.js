import { Routes, Route } from 'react-router-dom';
import { Routers } from '../utilities/routes';
import React, { useEffect } from 'react';
import MenuS from './menu/index';
import { Breadcrumb, Layout } from 'antd';
import HeaderS from './header';
import FooterS from './footer';

function index() {
  const { Content } = Layout;
  useEffect(() => {}, []);
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
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Routes>
            {Routers.map(({ name, tag }) => {
              const AllRoutes = require('../Page/' + tag + '/index').default;
              return <Route path={'/' + name} key={tag} element={<AllRoutes />} />;
            })}
            <Route path="*" element={<>This Page is not found</>} />
          </Routes>
        </Content>
        <FooterS />
      </Layout>
    </Layout>
  );
}
export default index;
