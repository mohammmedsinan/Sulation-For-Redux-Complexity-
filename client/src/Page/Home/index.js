import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'API';
function index({ home }) {
  return (
    <div>
      React Hot server <Link to="/About">dd</Link>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    home: state.Home,
  };
};
export default connect(mapStateToProps)(index);
