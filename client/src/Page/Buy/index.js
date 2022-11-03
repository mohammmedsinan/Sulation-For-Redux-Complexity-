import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'API';

function index({ buy }) {
  React.useEffect(() => {
    Dispatch('Buy/Api', '/Profile/all', 'POST', {});
    buy.status === 'success';
  }, [buy.status]);
  return <div>Buy</div>;
}
const mapStateToProps = (state) => {
  return {
    buy: state.Buy,
  };
};
export default connect(mapStateToProps)(index);
