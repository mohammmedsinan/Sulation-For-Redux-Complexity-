import { Button, Form, Input, Card, InputNumber, Row, Col, Skeleton } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dispatch } from 'API';
import React from 'react';
import { useSelector } from 'react-redux';

function onFinishFailed() {}

function index() {
  let data = useSelector((state) => state?.Events);
  const location = useLocation();
  const editMode = window.location.href.includes('edit');
  const navigate = useNavigate();
  const id = location.pathname.split('/')[3];
  const [form] = Form.useForm();
  React.useEffect(() => {
    if (editMode) {
      Dispatch('events/details', `/events/find/${id}`, 'GET');
    }
  }, []);
  function onFinish(values) {
    if (editMode) {
      Dispatch('events/create', `/events/update/${id}`, 'PUT', { ...values });
    } else {
      Dispatch('events/create', '/events/create', 'POST', { ...values });
    }
    setTimeout(() => {
      Dispatch('events/details', `/events/find/${id}`, 'GET');
    }, 700);

    navigate('/events');
  }

  if ((data?.status !== 'loading' && data?.details?.data?._id === id) || editMode === false) {
    return (
      <Card>
        <Form form={form} name="Register" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Row>
            <Col span={12}>
              <Form.Item
                name={['name']}
                label="Event Name"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                initialValue={editMode ? data?.details?.data?.name : undefined}
              >
                <Input placeholder="Product Name..." />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name={['img']}
                label="Image slider"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                initialValue={editMode ? data?.details?.data?.img : undefined}
              >
                <Input placeholder="add image url" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name={['about']}
                label="About the event"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                initialValue={editMode ? data?.details?.data?.about : undefined}
              >
                <Input placeholder="info about the event" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name={['link']}
                label="Redirect Link"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                initialValue={editMode ? data?.details?.data?.link : undefined}
              >
                <Input placeholder="How much stock is available" />
              </Form.Item>
            </Col>
          </Row>
          <Row justify={'center'}>
            <Col>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100px', height: '40px', borderRadius: '10px' }}
                >
                  {editMode ? 'Update' : 'Create'}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    );
  }
  return (
    <Skeleton
      avatar
      active
      paragraph={{
        rows: 4,
      }}
    />
  );
}

export default index;
