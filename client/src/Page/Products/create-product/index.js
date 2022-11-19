import { Button, Form, Input, Card, InputNumber, Row, Col } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dispatch } from 'API';
import React from 'react';
import { useSelector } from 'react-redux';

function onFinishFailed() {}

function index() {
  const data = useSelector((state) => state?.Products);
  const editMode = window.location.href.includes('edit');
  const location = useLocation();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (editMode && data?.status === 'loading') {
      Dispatch('products/details', '/products/find', 'POST', {
        id: location.pathname.split('/')[3],
      });
    }
  }, [data?.details]);
  React.useEffect(() => {
    Dispatch('products/details', '/products/find', 'POST', {
      id: location.pathname.split('/')[3],
    });
    Dispatch('products/get', '/products/all', 'POST', {});
    console.log('faired');
  }, []);
  function onFinish(values) {
    Dispatch('products/create', '/products/create', 'POST', { ...values });
    navigate('/products');
  }
  if (data?.status !== 'loading') {
    return (
      <Card>
        <Form form={form} name="Register" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Row>
            <Col span={24}>
              <Form.Item
                name={['name']}
                label="Product Name"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                initialValue={data?.details?.data?.name}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={['img']}
                label="Image Url"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                initialValue={data?.details?.data?.img}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name={['price']}
                label="Price"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                initialValue={data?.details?.data?.price}
              >
                <InputNumber />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={['stock']}
                label="Stocks"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                initialValue={data?.details?.data?.stock}
              >
                <InputNumber />
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
  return null;
}

export default index;
