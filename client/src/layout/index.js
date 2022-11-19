import { Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { Routers } from '../routes';
import React from 'react';
import MenuS from './menu/index';
import { Breadcrumb, Layout } from 'antd';
import HeaderS from './header';
import FooterS from './footer';
import { useSelector } from 'react-redux';

function BreadCrumb() {
  let currentUrl = {};
  let Parent = {};
  let father = {};
  const pathname = window.location.pathname;
  const slicePathname = pathname.split('/');
  const isRoute = Routers.find(
    (route) => route.name.toLowerCase() === slicePathname[1].toLowerCase(),
  );
  Routers.find((route) => {
    if (slicePathname[1]?.toLowerCase() === route?.name.toLowerCase()) {
      currentUrl = route;
    } else if (slicePathname[2]?.toLowerCase() === route?.name.toLowerCase()) {
      currentUrl = route;
    } else if (slicePathname[3]?.toLowerCase() === route?.name?.toLowerCase()) {
      currentUrl = route;
    } else if (slicePathname[4]?.toLowerCase() === route?.name?.toLowerCase()) {
      currentUrl = route;
    }
  });
  if (JSON.stringify(currentUrl) !== '{}') {
    if (currentUrl?.parent) {
      Routers.map((route) => {
        if (currentUrl?.parentId === route.id) {
          Parent = route;
        }
      });
      Routers.map((route) => {
        if (Parent?.parentId === route.id) {
          father = route;
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
              {Parent?.parent === true && (
                <Breadcrumb.Item>
                  <Parent.icon />
                  <Link to={`/${father?.name}`}>{father?.name}</Link>
                </Breadcrumb.Item>
              )}
              {currentUrl?.parent === true && (
                <Breadcrumb.Item>
                  <Parent.icon />
                  <Link to={`/${Parent?.name}`}>{Parent?.name}</Link>
                </Breadcrumb.Item>
              )}
            </>
          )}
          <Breadcrumb.Item>
            <currentUrl.icon /> <Link to={`/${currentUrl?.name}`}>{currentUrl?.name}</Link>
          </Breadcrumb.Item>
        </>
      </Breadcrumb>
    );
  } else {
    return <></>;
  }
}
function index(props) {
  let currentPage = [];
  const location = useLocation();
  const current = location.pathname.split('/');
  const state = useSelector((state) => state);
  React.useEffect(() => {
    // if (location.pathname === '/') return navigate('/staging/comps');
    BreadCrumb();
  }, [location.pathname]);
  if (current.length === 2) {
    Routers.map((route) => {
      if (route.name.toLowerCase() === current[1].toLowerCase()) {
        currentPage.push(route);
      }
    });
  } else if (current.length >= 3) {
    Routers.map((route) => {
      if (route.name.toLowerCase() === current[2].toLowerCase()) {
        currentPage.push(route);
      }
    });
  }
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
                {Routers.map(({ name, pin, outSide, url }) => {
                  if (!pin && !outSide) {
                    const AllRoutes = require('../Page/' + name + '/index').default;
                    return (
                      <Route
                        path={url}
                        key={name}
                        element={<AllRoutes dispatch={props.Dispatch} state={state} />}
                      />
                    );
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
                      {currentPage.map(({ name, url }) => {
                        let parentOFCurrentPage = '';
                        Routers.map((route) => {
                          if (route.id === currentPage[0].parentId) {
                            parentOFCurrentPage = route.name;
                          }
                        });
                        const AllRoutes = require(`../Page/${parentOFCurrentPage}/${name}`).default;
                        return (
                          <Route
                            path={url}
                            key={name}
                            element={<AllRoutes dispatch={props.Dispatch} state={state} />}
                          />
                        );
                      })}
                    </Routes>
                  </Content>
                  <FooterS />
                </Layout>
              </Layout>
            </>
          )}
        </>
      )}
    </>
  );
}
export default index;
