import { Routers } from '../../routes';
import React from 'react';
import { Breadcrumb, Card, Layout } from 'antd';
import { Link } from 'react-router-dom';

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

export default BreadCrumb;
