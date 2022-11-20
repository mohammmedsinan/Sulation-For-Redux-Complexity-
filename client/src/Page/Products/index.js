import { Button, Row, Col } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from './components/list';

function index({ state: { Products }, dispatch }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    let currentPageSize = {};
    if (Products?.status === 'loading' || currentPageSize !== Products?.data?.data) {
      dispatch('products/get', '/products/all', 'POST', {});
      currentPageSize = Products?.data?.data;
    }
  }, []);
  return (
    <Row>
      <Col offset={22}>
        <Button
          onClick={() => navigate('/products/create-product/1')}
          style={{ marginBottom: '20px' }}
        >
          Create Product
        </Button>
      </Col>
      <Col span={24}>
        <List />
      </Col>
    </Row>
  );
}

export default index;
