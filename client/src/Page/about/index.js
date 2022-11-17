import React from 'react';

function index({ dispatch, state: { about } }) {
  React.useEffect(() => {
    dispatch('about/Api', 'Profile/all', 'POST');
    dispatch('about/Api1', 'Profile/all', 'POST');
    dispatch('about/Api2', 'Profile/all', 'POST');
    dispatch('about/Api3', 'Profile/all', 'POST');
    dispatch('about/Api4', 'Profile/all', 'POST');
    dispatch('about/Api5', 'Profile/all', 'POST');
    dispatch('about/Api6', 'Profile/all', 'POST');
    dispatch('about/Api7', 'Profile/all', 'POST');
  }, []);
  return <div></div>;
}

export default index;
