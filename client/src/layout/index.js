import { Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Routers } from '../routes';
import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './error';

function index(props) {
  const state = useSelector((state) => state);
  const location = useLocation();
  const navigate = useNavigate();
  const [switcher, setSwitcher] = React.useState('');
  React.useEffect(() => {
    if (location.pathname.split('/').length === 2) {
      setSwitcher(location.pathname.split('/')[1].toLowerCase());
    }
    if (location.pathname.split('/').length >= 3) {
      setSwitcher(location.pathname.split('/')[2].toLowerCase());
    }
  }, [location.pathname]);
  React.useEffect(() => {
    location.pathname === '/' && navigate('/Analytics/chart');
  }, []);
  return (
    <>
      {Routers.map(({ name, pin, outSide, url, parentId, customLayout }) => {
        let CustomLayout = require(`./DashboardLayout`).default;
        if (customLayout) {
          CustomLayout = require(`./${customLayout}`).default;
        }
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
              <CustomLayout
                child={
                  !customLayout ? (
                    <Route
                      path={url}
                      key={name}
                      element={<AllRoutes dispatch={props.Dispatch} state={state} />}
                    />
                  ) : (
                    <Routes>
                      <AllRoutes dispatch={props.Dispatch} state={state} />
                    </Routes>
                  )
                }
              />
            )}
          </>
        );
      })}
    </>
  );
}
export default index;
