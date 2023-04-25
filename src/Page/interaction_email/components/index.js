import React from "react";
import EmailForm from "./mailTemplate";
import { Row, Col, Card } from "antd";

function index() {
  return (
    <Row>
      <Col span={24}>
        <Card>
        <EmailForm />
        </Card>
      </Col>
    </Row>
  );
}

export default index;
