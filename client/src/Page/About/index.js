import React, { useEffect } from 'react';
import { Dispatch } from 'API';

function index() {
  useEffect(() => {
    Dispatch('About/Api', '/Tweets/test', 'GET');
  }, []);
  return <div>About</div>;
}

export default index;
