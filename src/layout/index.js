import { Route, Router, Routes, useLocation } from "react-router-dom";
import { Routers } from "routes";
import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "./error";
import FolderLayout from "./folder";

function index(props) {
  const state = useSelector((state) => state);
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const [switcher, setSwitcher] = React.useState("");
  React.useEffect(() => {
    if (pathname.length === 2) setSwitcher(pathname[1].toLowerCase());
    if (pathname.length >= 3) setSwitcher(pathname[2].toLowerCase());
    if (pathname.length === 5) setSwitcher(pathname[3].toLowerCase());
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="*" element={<Dashboard />} />
      {Routers.map(
        ({ name, pin, outSide, url, parentId, customLayout, subRoute, id }) => {
          let CustomLayout = require(`./DashboardLayout`).default;
          if (customLayout) CustomLayout = require(`./${customLayout}`).default;
          let AllRoutes = () => <></>;
          if (!pin) {
            if (!outSide)
              AllRoutes = require("../Page/" + name + "/index").default;
            if (outSide)
              AllRoutes = require(`../Page/${
                Routers.find((e) => e.id === parentId).name
              }/${name}`).default;
            if (subRoute) {
              const parentName = Routers.map((route) => parentId === route.id);
              AllRoutes =
                require(`../Page/${parentName}/${name}/index`).default;
            }
          } else {
            AllRoutes = () => <FolderLayout id={id} />;
          }
          return (
            <>
              {switcher === name.toLocaleLowerCase() && (
                <Route
                  path={url}
                  key={name}
                  element={
                    <CustomLayout
                      child={
                        <AllRoutes dispatch={props.Dispatch} state={state} />
                      }
                    />
                  }
                />
              )}
            </>
          );
        }
      )}
    </Routes>
  );
}
export default index;
