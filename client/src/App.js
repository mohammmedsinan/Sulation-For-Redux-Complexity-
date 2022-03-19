import { Routes, Route } from 'react-router-dom';
import React, { useLayoutEffect } from 'react';
import { MenuSlider, TagSlider } from './Component/index';
import Home from './Page/Home/index';

function App() {
  return (
    <div>
      <MenuSlider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<>This Page is not found</>} />
      </Routes>
      <TagSlider />
    </div>
  );
}
export default App;
