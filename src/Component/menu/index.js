import { Layout, Menu } from 'antd';
import { Routers } from '../../routes';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

function index() {
  const items = [];
  let defaultActive = '';
  let defaultOpen = '';
  const history = useNavigate();
  Routers.map((route) => {
    if (!route.parent) {
      if (route.pin) {
        let childs = [];
        Routers.map((route) => {
          if (route.pin && route.child) {
            childs.push(route);
          }
        });
        items.push({
          label: !route.label ? route.name : route.label,
          children: childs.map((child) => {
            if (child.parentId === route.id) {
              return {
                label: child.name,
                children: Routers.map((route) => {
                  if (route.parentId === child.id) {
                    return {
                      label: !route.label ? route.name : route.label,
                      children: undefined,
                      pid: route.parentId,
                      icon: <route.icon />,
                      id: route.id,
                      key: route.id,
                      onClick: () => history(`${route.url}`),
                    };
                  }
                }),
                pid: child.parentId,
                icon: <route.icon />,
                id: child.id,
                key: child.id,
              };
            }
          }),
          pid: route.parentId,
          icon: <route.icon />,
          id: route.id,
          key: route.id,
        });
      } else {
        items.push({
          label: !route.label ? route.name : route.label,
          children: undefined,
          pid: route.parentId,
          icon: <route.icon />,
          id: route.id,
          key: route.id,
          onClick: () => history(`${route.url}`),
        });
      }
    } else {
      const parent = items.find((ele) => ele.id === route.parentId);
      if (!route.pin && !route.child) {
        parent?.children?.push({
          label: !route.label ? route.name : route.label,
          children: undefined,
          pid: route.parentId,
          icon: <route.icon />,
          id: route.id,
          key: route.id,
          onClick: () => history(`${route.url}`),
        });
      }
    }
  });
  const pathname = window.location.pathname.split('/');
  Routers.map((route) => {
    if (pathname.length === 2) {
      if (pathname[1].toLowerCase() === route.name.toLowerCase()) {
        defaultActive = route.id;
      }
    } else if (pathname.length === 3) {
      if (pathname[2].toLowerCase() === route.name.toLowerCase()) {
        defaultActive = route.id;
      }
      if (pathname[1].toLowerCase() === route.name.toLowerCase()) {
        defaultOpen = route.id;
      }
    } else if (pathname.length === 4) {
      if (pathname[3].toLowerCase() === route.name.toLowerCase()) {
        defaultActive = route.id;
      }
      if (pathname[2].toLowerCase() === route.name.toLowerCase()) {
        defaultOpen = [route.id, route.parentId];
      }
    }
  });
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      width={250}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{ boxShadow: '1px 0px 10px 0px' }}
      theme="light"
    >
      <div id="logo" style={{ height: '100px' }} />
      <Menu
        mode="inline"
        defaultSelectedKeys={[`${defaultActive}`]}
        items={items}
        defaultOpenKeys={
          pathname.length > 4 ? [`${defaultOpen[0]}`, `${defaultOpen[1]}`] : [`${defaultOpen}`]
        }
      />
    </Sider>
  );
}

export default index;
