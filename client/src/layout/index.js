import { Route } from 'react-router-dom';
import { Routers } from '../routes';
import React from 'react';
import { useSelector } from 'react-redux';
import BaseLayout from './DashboardLayout';

function index(props) {
  const state = useSelector((state) => state);
  return (
    <BaseLayout
      child={Routers.map(({ name, pin, outSide, url, parentId }) => {
        let AllRoutes = '';
        if (!pin) {
          if (!outSide) AllRoutes = require('../Page/' + name + '/index').default;
          if (outSide)
            AllRoutes = require(`../Page/${
              Routers.find((e) => e.id === parentId).name
            }/${name}`).default;
        }
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
export default index;
