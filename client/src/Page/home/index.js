import React from 'react';
import { Dispatch } from 'API';

function index() {
  React.useEffect(() => {
    Dispatch('home/Api', '/Tweets/test', 'GET');
  }, []);
  return <div>index</div>;
}

export default index;
