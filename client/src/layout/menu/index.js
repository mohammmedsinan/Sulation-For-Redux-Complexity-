import { FileOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Routers } from '../../utilities/routes';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function index() {
  const items = [];
  const history = useNavigate();
  Routers.map((route) => {
    if (!route.parent) {
      items.push({
        label: route.tag,
        children: route.child ? [] : undefined,
        pid: route.parentId,
        icon: <FileOutlined />,
        id: route.id,
        key: route.id,
        onClick: () => history(`/${route.name}`),
      });
    } else {
      const parent = items.find((ele) => ele.id === route.parentId);
      parent.children.push({
        label: route.tag,
        children: undefined,
        pid: route.parentId,
        icon: <FileOutlined />,
        id: route.id,
        key: route.id,
      });
    }
  });
  console.log(items);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="logo" style={{ height: '100px', backgroundColor: '#032f5a' }} />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  );
}

export default index;
