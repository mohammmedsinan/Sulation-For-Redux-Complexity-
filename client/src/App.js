import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { MenuSlider, TagSlider } from './Component/index';
import Home from './Page/Home/index';

function App() {
  return (
    <div>
      <MenuSlider />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <TagSlider />
    </div>
  );
}

export default App;
