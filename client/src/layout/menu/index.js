import { Layout, Menu } from 'antd';
import { Routers } from '../../utilities/routes';
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
        items.push({
          label: route.name,
          children: route.child ? [] : undefined,
          pid: route.parentId,
          icon: <route.icon />,
          id: route.id,
          key: route.id,
        });
      } else {
        items.push({
          label: route.name,
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
      parent?.children?.push({
        label: route.name,
        children: undefined,
        pid: route.parentId,
        icon: <route.icon />,
        id: route.id,
        key: route.id,
        onClick: () => history(`${route.url}`),
      });
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
        defaultOpen = route.id;
      }
    }
  });
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{ boxShadow: '1px 0px 20px 0px' }}
    >
      <div className="logo" style={{ height: '100px', backgroundColor: '#346beb' }} />
      <Menu
        theme="dark"
        defaultSelectedKeys={[`${defaultActive}`]}
        mode="inline"
        items={items}
        defaultOpenKeys={[`${defaultOpen}`]}
      />
    </Sider>
  );
}

export default index;
