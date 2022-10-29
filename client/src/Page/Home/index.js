import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from '../../Api/index';

function index({ home }) {
  React.useEffect(() => {
    Dispatch('Dude/API', '/Tweets/test' , "GET" );
    home.status === 'success';
  }, [home.status]);
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
