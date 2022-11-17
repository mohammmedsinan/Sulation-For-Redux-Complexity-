import React from 'react';

function index({ dispatch, state: { home } }) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    if (!home.data.Message) {
      dispatch('home/Api', '/Tweets/test', 'GET');
      dispatch('home/Api1', '/Tweets/test', 'GET');
    }
    setData(home?.data?.data);
  }, []);
  return <div>afkjdshfksajdhfkjsdahfjs</div>;
}

export default index;
