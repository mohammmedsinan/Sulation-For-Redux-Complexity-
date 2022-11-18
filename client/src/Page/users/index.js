import React from 'react';
import List from './components/list';

function index({ state: { users }, dispatch }) {
  React.useEffect(() => {
    if (users?.status === 'loading') {
      dispatch('users/get', '/Profile/all', 'POST', {});
    }
  }, [users?.status]);
  return (
    <div>
      <List />
    </div>
  );
}

export default index;
