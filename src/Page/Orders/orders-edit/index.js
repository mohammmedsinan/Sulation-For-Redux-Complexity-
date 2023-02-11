import React from 'react';
import { Button, Form, Input, Card, Row, Col } from 'antd';
import { useLocation } from 'react-router-dom';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
function index({
  dispatch,
  state: {
    Orders: { details },
  },
}) {
  const location = useLocation();
  React.useEffect(() => {
    dispatch(`orders/details`, `/orders/get/${location.pathname.split('/')[3]}`, 'GET');
  }, []);
  return (
    <Card>
      <Form
        name="edit"
        labelCol={{ span: 24 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Co l>
            <Form.Item label="Username" name="username" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Co>
          <Col>
            <Form.Item label="Password" name="password" rules={[{ required: true }]}>
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default index;
