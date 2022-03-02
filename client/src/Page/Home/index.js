import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchApi } from 'API';
import { Button } from 'antd';

function index({ home, dispatch }) {
  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  return <div>INDEX REACT JS</div>;
}

const mapStateToProps = (state) => {
  return {
    home: state.Home,
  };
};
export default connect(mapStateToProps)(index);
