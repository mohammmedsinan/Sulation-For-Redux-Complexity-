import React from 'react';
import List from './components/List';
function index({ dispatch, state: { Users } }) {
  return (
    <div>
      <List users={Users} dispatch={dispatch} />
    </div>
  );
}

export default index;
