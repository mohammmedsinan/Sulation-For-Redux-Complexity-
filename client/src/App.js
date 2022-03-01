import { Routes, Route } from 'react-router-dom';
import React, { useLayoutEffect } from 'react';
import { MenuSlider, TagSlider } from './Component/index';
import Home from './Page/Home/index';
import { connect } from 'react-redux';
import { fetchApi } from './Api/index';

function App(props) {
  const { dispatch } = props;
  useLayoutEffect(() => {
    dispatch(fetchApi());
  }, {});
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
const mapStateToProps = (state) => {
  return {
    home: state.Home,
  };
};
export default connect(mapStateToProps)(App);
