import React from 'react';
import List from './components/List';
function index({ dispatch, state: { Orders } }) {
  return (
    <div>
      <List orders={Orders} dispatch={dispatch} />
    </div>
  );
}

export default index;
