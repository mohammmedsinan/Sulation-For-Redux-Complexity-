import { Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Routers } from 'routes';
import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './error';

function index(props) {
  const state = useSelector((state) => state);
  const location = useLocation();
  const pathname = location.pathname.split('/');
  const [switcher, setSwitcher] = React.useState('');
  React.useEffect(() => {
    if (pathname.length === 2) setSwitcher(pathname[1].toLowerCase());
    if (pathname.length >= 3) setSwitcher(pathname[2].toLowerCase());
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="*" element={<Dashboard />} />
      {Routers.map(({ name, pin, outSide, url, parentId, customLayout }) => {
        let CustomLayout = require(`./DashboardLayout`).default;
        if (customLayout) CustomLayout = require(`./${customLayout}`).default;
        let AllRoutes = '';
        if (!pin) {
          if (!outSide) AllRoutes = require('../Page/' + name + '/index').default;
          if (outSide)
            AllRoutes = require(`../Page/${
              Routers.find((e) => e.id === parentId).name
            }/${name}`).default;
        }
        return (
          <>
            {switcher === name.toLocaleLowerCase() && (
              <Route
                path={url}
                key={name}
                element={
                  <CustomLayout child={<AllRoutes dispatch={props.Dispatch} state={state} />} />
                }
              />
            )}
          </>
        );
      })}
    </Routes>
  );
}
export default index;
