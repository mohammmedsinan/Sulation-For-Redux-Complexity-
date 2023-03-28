import React from 'react';
import { Button, Form, Input, Card, Row, Col } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
function index({ dispatch, state: { Orders } }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  React.useEffect(() => {
    if (location.pathname.split('/')[3].length !== 1)
      dispatch(`orders/details`, `/orders/get/${location.pathname.split('/')[3]}`, 'GET');
  }, []);
  React.useEffect(() => {
    if (location.pathname.split('/')[3].length !== 1) {
      form.setFieldsValue({
        username: Orders?.details?.customer?.RealName,
        type: Orders?.details?.type,
        status: Orders?.details?.status,
        address: Orders?.details?.address,
        order_number: Orders?.details?.order_number,
      });
    }
  }, [Orders.details]);
  const onFinish = (values) => {
    dispatch(`orders/details`, `/orders/edit`, 'POST', {
      ...values,
      id: Orders.details._id,
    });
    if (Orders.status !== 'loading') {
      navigate('/orders');
    }
  };
  return (
    <Card>
      <Form
        form={form}
        name="edit"
        labelCol={{ span: 24 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[30, 20]} justify={'center'}>
          <Col>
            <Form.Item label="Status" name="status" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Type" name="type" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Address" name="address" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Order Number" name="order_number" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={10} offset={7}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default index;
