import { Route, useLocation, useNavigate } from 'react-router-dom';
import { Routers } from '../routes';
import React from 'react';
import { useSelector } from 'react-redux';
import BaseLayout from './DashboardLayout';

function index(props) {
  let currentPage = [];
  const location = useLocation();
  const current = location.pathname.split('/');
  const state = useSelector((state) => state);
  if (current.length === 2) {
    Routers.map((route) => {
      if (route.name.toLowerCase() === current[1].toLowerCase()) {
        currentPage.push(route);
      }
    });
  }
  if (current.length >= 3) {
    Routers.map((route) => {
      if (route.name.toLowerCase() === current[2].toLowerCase()) {
        currentPage.push(route);
      }
    });
  }
  console.log(current);
  // ---------------------------------------------------
  if (currentPage[0]?.outSide === false) {
    //Menu render
    return (
      <BaseLayout
        child={Routers.map(({ name, pin, outSide, url }) => {
          if (!pin && !outSide) {
            const AllRoutes = require('../Page/' + name + '/index').default;
            return (
              <Route
                path={url}
                key={name}
                element={<AllRoutes dispatch={props.Dispatch} state={state} />}
              />
            );
          }
        })}
      />
    );
  } else {
    return (
      <BaseLayout
        //Submenu render
        child={currentPage.map(({ name, url }) => {
          let parentOFCurrentPage = '';
          Routers.map((route) => {
            if (route.id === currentPage[0].parentId) {
              parentOFCurrentPage = route.name;
            }
          });
          const AllRoutes = require(`../Page/${parentOFCurrentPage}/${name}`).default;
          return (
            <Route
              path={url}
              key={name}
              element={<AllRoutes dispatch={props.Dispatch} state={state} />}
            />
          );
        })}
      />
    );
  }
}
export default index;
