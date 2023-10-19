import React from "react";
import { Form, Row, Col, Checkbox } from "antd";

function socialMediaChecker() {
  return (
    <Form>
      <Row justify={"space-between"}>
        <Col><Form.Item><Checkbox>Facebook</Checkbox></Form.Item></Col>
        <Col><Form.Item><Checkbox>Instagram</Checkbox></Form.Item></Col>
        <Col><Form.Item><Checkbox>Twitter</Checkbox></Form.Item></Col>
      </Row>
    </Form>
  );
}

export default socialMediaChecker;
