import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AsyncReducer } from 'API';

function index({ home, dispatch }) {
  React.useEffect(() => {
    dispatch(AsyncReducer('Dude/APi', `/Profile/Train Heartent`).GET());
    console.log(home);
  }, [home.status]);
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
