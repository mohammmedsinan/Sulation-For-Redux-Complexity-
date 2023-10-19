import React from "react";
import { Button, Form, Input, Row, Col, InputNumber, Select, Card } from "antd";

const { TextArea } = Input;
function mailTemplate() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form
      layout="vertical"
      form={form}
      name="control-hooks"
      onFinish={onFinish}
    >
      <Row justify={"space-between"}>
        <Col span={11}>
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <Input placeholder="Title" />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <Input placeholder="For" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <TextArea
              placeholder="Description for the receipt"
              autoSize={{ minRows: 4, maxRows: 10 }}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default mailTemplate;
