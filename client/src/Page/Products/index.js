import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from './components/list';

function index({ state: { Products }, dispatch }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    let currentPageSize = {};
    if (Products?.status === 'loading' || currentPageSize.length !== Products?.data?.data.length) {
      dispatch('products/get', '/products/all', 'POST', {});
      currentPageSize = Products?.data?.data;
    }
  }, []);
  return (
    <div>
      <Button onClick={() => navigate('/products/create-product/1')}>Create Product</Button>
      <List />
    </div>
  );
}

export default index;
