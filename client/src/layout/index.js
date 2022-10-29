import { MenuSlider, TagSlider } from '../Component/index';
import { Routes, Route } from 'react-router-dom';
import { Routers } from '../utilities/routes';
import React from 'react';

function index() {
  return (
    <div>
      <MenuSlider />
      <Routes>
        {Routers.map(({ name, tag }) => {
          const AllRoutes = require('../Page/' + tag + '/index').default;
          return <Route path={'/' + name} key={tag} element={<AllRoutes />} />;
        })}
        <Route path="*" element={<>This Page is not found</>} />
      </Routes>
      <TagSlider />
    </div>
  );
}
export default index;
