import { Button, Form, Input, Card, InputNumber, Row, Col, Skeleton } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dispatch } from 'API';
import React from 'react';
import { useSelector } from 'react-redux';

function onFinishFailed() {}

function index() {
  let data = useSelector((state) => state?.Products);
  const location = useLocation();
  const editMode = window.location.href.includes('edit');
  const navigate = useNavigate();
  const id = location.pathname.split('/')[3];
  const [form] = Form.useForm();
  React.useEffect(() => {
    editMode &&
      Dispatch('products/details', '/products/find', 'POST', {
        id,
      });
  }, []);
  function onFinish(values) {
    if (editMode) {
      Dispatch('products/create', `/products/update/${id}`, 'PUT', { ...values });
    } else {
      Dispatch('products/create', '/products/create', 'POST', { ...values });
    }
    editMode &&
      setTimeout(() => {
        Dispatch('products/details', '/products/find', 'POST', {
          id,
        });
      }, 700);

    navigate('/products');
  }

  if ((data?.status !== 'loading' && data?.details?.data?._id === id) || editMode === false) {
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
                initialValue={editMode ? data?.details?.data?.name : undefined}
              >
                <Input placeholder="Product Name..." />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={['img']}
                label="Image Url"
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
                name={['price']}
                label="Price"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                initialValue={editMode ? data?.details?.data?.price : undefined}
              >
                <InputNumber placeholder="Price of product" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={['stock']}
                label="Stocks"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                initialValue={editMode ? data?.details?.data?.stock : undefined}
              >
                <InputNumber placeholder="How much stock is available" />
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
