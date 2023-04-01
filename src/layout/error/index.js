import React from 'react';
import MenuS from '../../Components/menu';
import { Card, Layout } from 'antd';
import HeaderS from '../../Components/header';
import FooterS from '../../Components/footer';

function BaseLayout({ child }) {
  const { Content } = Layout;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MenuS />
      <Layout>
        <HeaderS />
        <Content
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card>
            <h1 style={{ fontSize: '30px' }}>Error this page isn't found</h1>
            {child}
          </Card>
        </Content>
        <FooterS />
      </Layout>
    </Layout>
  );
}

export default BaseLayout;
