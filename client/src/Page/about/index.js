import React from 'react';
import { Dispatch } from 'API';

function index() {
  React.useEffect(() => {
    Dispatch('about/Api', '/Profile/all', 'POST', {});
  }, []);
  return <div>index</div>;
}

export default index;
