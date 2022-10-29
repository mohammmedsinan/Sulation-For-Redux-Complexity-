import { MenuSlider, TagSlider } from './Component/index';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home/index';
import { Routers } from './utilities/routes';
import React from 'react';

function Layout() {
  return (
    <div>
      <MenuSlider />
      <Routes>
        {Routers.map(({ name }) => {
          const IMpo = require('./Page/' + name + '/index').default;
          return (
            <>
              <Route path={'/' + name} key={name} element={<IMpo />} />;
            </>
          );
        })}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<>This Page is not found</>} />
      </Routes>
      <TagSlider />
    </div>
  );
}
export default Layout;
