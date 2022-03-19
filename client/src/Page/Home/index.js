import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AsyncReducers } from './model';

function index({ home, dispatch }) {
  React.useEffect(() => {
    dispatch(AsyncReducers.change());
    console.log(home);
  }, [home?.status]);
  return (
    <div>
      React Hot server <Link to="/s">dd</Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    home: state.Home,
  };
};
export default connect(mapStateToProps)(index);
