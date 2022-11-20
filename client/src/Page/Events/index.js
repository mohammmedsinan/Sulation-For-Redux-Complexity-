import { Button, Row, Col } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from './components/list';

function index({ state: { Events }, dispatch }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    let currentPageSize = {};
    if (Events?.status === 'loading' || currentPageSize !== Events?.data?.data) {
      dispatch('events/get', '/events/all', 'POST', {});
      currentPageSize = Events?.data?.data;
    }
  }, []);
  return (
    <Row>
      <Col offset={22}>
        <Button onClick={() => navigate('/events/create-event/1')} style={{ marginBottom: '20px' }}>
          Create Event
        </Button>
      </Col>
      <Col span={24}>
        <List />
      </Col>
    </Row>
  );
}

export default index;
