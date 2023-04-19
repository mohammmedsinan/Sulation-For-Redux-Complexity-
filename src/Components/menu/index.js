import { Layout, Menu } from 'antd';
import { Routers } from 'routes';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const { Sider } = Layout;
function index() {
  const [collapsed, setCollapsed] = useState(false);
  const [items, setItems] = useState([]);
  const location = useLocation();
  const pathnameArray = location.pathname.split("/");
  const navigate = useNavigate();
  React.useEffect(() => {
    //Push Items to the menu Array
    Routers.map(route => !route.parentId&& setItems(e => [...e, { key: route.id, icon: <route.icon />, children: [], label: route.label ? route.label : route.name }]))
    Routers.map(route => route.parentId&& setItems(prop => prop?.map(e => e?.key === route.parentId ? {...e,children:[...e.children,{onClick:e => navigate(route.url),key:route.id,label:route.label?route.label:route.name,icon:<route.icon />}]}:e)))
  }, [])
  return (
    <Sider
      width={270}
      collapsible
      collapsed={collapsed}
      theme={"light"}
      onCollapse={(value) => setCollapsed(value)}>
      <div id="logo" style={{ height: '100px' }} />
      <Menu
        mode="inline"
        items={items}
        theme={"light"}e
        defaultOpenKeys={[`${pathnameArray.length >= 2 && Routers.find(e => e.name === pathnameArray[1] ? e.id:0).id}`]}
        defaultSelectedKeys={[`${pathnameArray.length >= 3&&Routers.find(e => e.name === pathnameArray[2] ? e.id:0).id}`]}
      />
    </Sider>
  );
}

export default index;
