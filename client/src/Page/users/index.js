import React from 'react';
import List from './components/list';

function index({ state: { Users }, dispatch }) {
  React.useEffect(() => {
    if (Users?.status === 'loading') {
      dispatch('users/get', '/users/all', 'POST', {});
    }
  }, [Users?.status]);
  return (
    <div>
      <List />
    </div>
  );
}

export default index;
