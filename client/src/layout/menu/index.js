import { Layout, Menu } from 'antd';
import { Routers } from '../../utilities/routes';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

function index() {
  const items = [];
  let defaultAcctive = '';
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
          children: route.child ? [] : undefined,
          pid: route.parentId,
          icon: <route.icon />,
          id: route.id,
          key: route.id,
          onClick: () => history(`/${route.name}`),
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
        onClick: () => history(`/${route.name}`),
      });
    }
  });
  const pathname = window.location.pathname.substring(1);
  const firstRoute = Routers.find((ele) => ele.name.toLowerCase() === pathname.toLowerCase());
  if (firstRoute === undefined) {
    defaultAcctive = 1;
  } else {
    defaultAcctive = firstRoute.id;
  }
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{ boxShadow: '1px 0px 20px 0px' }}
    >
      <div className="logo" style={{ height: '100px', backgroundColor: '#346beb' }} />
      <Menu theme="dark" defaultSelectedKeys={`${defaultAcctive}`} mode="inline" items={items} />
    </Sider>
  );
}

export default index;
