import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function index({ home, dispatch }) {
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
