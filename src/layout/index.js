import { Route, Router, Routes, useLocation } from "react-router-dom";
import { Routers } from "routes";
import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "./DashboardLayout/index";
import FolderLayout from "./folder";
import {Site_Theme} from '../utilities/config'
import { ConfigProvider, theme } from "antd";
//Transform from RGB to HEX
function rgbToHex(RGB) {const RGBarray = RGB.split(',');const rgb = (Number(RGBarray[0]) << 16) | (Number(RGBarray[1]) << 8) | (Number(RGBarray[2]) << 0); return '#' + (0x1000000 + rgb).toString(16).slice(1);}
function index(props) {
  const state = useSelector((state) => state);
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const [switcher, setSwitcher] = React.useState("");
  const { primaryColor } = Site_Theme
  //Declare a Global css variable 
  React.useEffect(() => {document.documentElement.style.setProperty('--PrimaryColor', primaryColor)},[])
  React.useEffect(() => {
    if (pathname.length === 2) setSwitcher(pathname[1].toLowerCase());
    if (pathname.length >= 3) setSwitcher(pathname[2].toLowerCase());
    if (pathname.length === 5) setSwitcher(pathname[3].toLowerCase());
  }, [location.pathname]);
  return (
    <ConfigProvider theme={{algorithm:state.ThemeToggle.DarkMode ? theme.darkAlgorithm:theme.defaultAlgorithm,token: {colorPrimary:rgbToHex(primaryColor),},}}>
    <Routes>
      <Route path="*" element={<Dashboard error={true} child={<h1 style={{textAlign:"center"}}>Error this page isn't found</h1>}/>} />
        {Routers.map(({ name, pin, outSide, url, parentId, customLayout, subRoute, id,label }) => {
          let CustomLayout = require(`./DashboardLayout`).default;
          let AllRoutes = () => <FolderLayout id={id} />;
          if (customLayout) CustomLayout = require(`./${customLayout}`).default;
          if (!outSide && !pin && !subRoute) AllRoutes = require("../Page/" + name + "/index").default;
          if (outSide && !pin) AllRoutes = require(`../Page/${Routers.find((e) => e.id === parentId).name}/${name}`).default;
          if (subRoute && !pin) AllRoutes = require(`../Page/${Routers.find((route) => parentId === route.id).name}/${name}/index`).default;
          return <>{switcher === label ? label.toLowerCase() : name.toLowerCase() && (<Route path={url} key={id} element={<CustomLayout child={<AllRoutes dispatch={props.Dispatch} state={state} title={label?label:name } />} />} />)}</>
        }
      )}
      </Routes>
      </ConfigProvider>
  );
}
export default index;
