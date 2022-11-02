import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Routers } from '../utilities/routes';
import React, { useState } from 'react';
import MenuS from './menu/index';
import { Breadcrumb, Layout } from 'antd';
import HeaderS from './header';
import FooterS from './footer';

function BreadCrumb() {
  let currentUrl = {};
  let Parent = {};
  const pathname = window.location.pathname;
  const slicePathname = pathname.split('/');
  const isRoute = Routers.find((route) => route.name === slicePathname[1]);
  Routers.find((route) => {
    if (slicePathname[1] === route.name) {
      currentUrl = route;
    }
  });
  if (JSON.stringify(currentUrl) !== '{}') {
    if (currentUrl.child) {
    } else if (currentUrl.parent) {
      Routers.find((route) => {
        if (currentUrl.parentId === route.id) {
          Parent = route;
        }
      });
    }
  }
  if (isRoute) {
    return (
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <>
          {JSON.stringify(currentUrl) !== '{}' && (
            <>
              {currentUrl.parent === true && (
                <Breadcrumb.Item>
                  <Parent.icon />
                  <Link to={`/${Parent.name}`}>{Parent.name}</Link>
                </Breadcrumb.Item>
              )}
            </>
          )}
          <Breadcrumb.Item>
            <currentUrl.icon /> <Link to={`/${currentUrl.name}`}>{currentUrl.name}</Link>
          </Breadcrumb.Item>
        </>
      </Breadcrumb>
    );
  } else {
    return <></>;
  }
}
function index() {
  let currentPage = [];
  const location = useLocation();
  const current = location.pathname.split('/');
  if (current.length === 2) {
    Routers.map((route) => {
      if (route.name === current[1]) {
        currentPage.push(route);
      }
    });
  }
  React.useEffect(() => {
    BreadCrumb();
  }, [location.pathname]);
  const { Content } = Layout;
  return (
    <>
      {currentPage[0]?.outSide === false ? (
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
              <Routes>
                {Routers.map(({ name, pin, outSide }) => {
                  if (!pin && !outSide) {
                    const AllRoutes = require('../Page/' + name + '/index').default;
                    return <Route path={'/' + name} key={name} element={<AllRoutes />} />;
                  }
                })}
                <Route path="*" element={<>This Page is not found</>} />
              </Routes>
            </Content>
            <FooterS />
          </Layout>
        </Layout>
      ) : (
        <>
          {currentPage.length === 0 ? (
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
                  <Routes>
                    <Route path="*" element={<>This Page is not found</>} />
                  </Routes>
                </Content>
                <FooterS />
              </Layout>
            </Layout>
          ) : (
            <>
              <BreadCrumb />
              <Routes>
                {currentPage.map(({ name, parentName }) => {
                  const AllRoutes = require(`../Page/${parentName}/${name}`).default;
                  return <Route path={'/' + name} key={name} element={<AllRoutes />} />;
                })}
              </Routes>
            </>
          )}
        </>
      )}
    </>
  );
}
export default index;
