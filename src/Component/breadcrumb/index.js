import { Routers } from "routes";
import React, { useEffect } from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

function useRoute() {
  const location = useLocation();
  let current = [];
  let parent = [];
  let folder = [];
  if (location.pathname.split("/").length === 2) {
    Routers.map((route) => {
      location.pathname.split("/")[1].toLowerCase() ===
        route.name.toLowerCase() && current.push(route);
    });
  }
  if (location.pathname.split("/").length >= 3) {
    Routers.map((route) => {
      location.pathname.split("/")[1].toLowerCase() ===
        route.name.toLowerCase() && current.push(route);
      location.pathname.split("/")[2].toLowerCase() ===
        route.name.toLowerCase() && folder.push(route);
    });
  }
  if (location.pathname.split("/").length === 5) {
    Routers.map((route) => {
    
      location.pathname.split("/")[3].toLowerCase() ===
        route.name.toLowerCase() && parent.push(route);
    });
  }
  return [current, parent, folder];
}

function BreadCrumb() {
  const location = useLocation();
  const [current, parent, folder] = useRoute();
  const [Current, setCurrent] = React.useState(current[0]);
  const [Parent, setParent] = React.useState(parent[0]);
  const [Folder, setFolder] = React.useState(folder[0]);
  useEffect(() => {
    setCurrent(current[0]);
    setFolder(folder[0]);
    setParent(parent[0]);
  }, [location.pathname]);
  return (
    <Breadcrumb
      style={{
        margin: "16px 0",
      }}
    >
      <Breadcrumb.Item>
        <Current.icon />
        <Link to={`/${Current?.name}`}>
          {!Current.label ? Current?.name : Current.label}
        </Link>
      </Breadcrumb.Item>
      {Folder && (
        <Breadcrumb.Item>
          <Folder.icon />
          <Link to={`/${Current.name}/${Folder?.name}`}>
            {!Folder.label ? Folder?.name : Folder.label}
          </Link>
        </Breadcrumb.Item>
      )}
      {Parent && (
        <Breadcrumb.Item>
          <Folder.icon />
          <Link to={`/${Parent?.name}`}>
            {!Parent.label ? Parent?.name : Parent.label}
          </Link>
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default BreadCrumb;
