import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AsyncReducer, Dispatch } from '../../Api/index';

function index({ home, dispatch }) {
  React.useEffect(() => {
    Dispatch('Dude/API', '/profile/test');
    Dispatch('Dude/API2', '/profile/Train Heartent');
    home.status === 'success' && console.log(home);
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
