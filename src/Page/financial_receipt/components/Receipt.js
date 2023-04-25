import { Button, Form, Input, Row, Col , InputNumber, Select } from "antd";
import React from "react";
const {TextArea} = Input
const Receipt = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: 600 }}>
      <Row justify={"space-between"}>
      <Col>
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <InputNumber addonAfter="$" placeholder="Write the number"/>
        </Form.Item>
      </Col>
        <Col>
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Select placeholder="Chose the type" options={[{ value: 'increment', label: 'Increment', }, { value: 'decrement', label: 'Decrement', },]}style={{width: 120,}}/>
        </Form.Item>
        </Col>
      <Col span={24}>
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <TextArea placeholder="Description for the receipt" autoSize={{ minRows: 4, maxRows: 10 }}/>
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
};
export default Receipt;
