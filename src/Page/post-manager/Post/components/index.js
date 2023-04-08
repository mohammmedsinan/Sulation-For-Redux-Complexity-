import React from "react";
import SocialMediaDispatcher from "./DispatchSocialMedia";
import Form from "./PostForm";
import { Row, Col, Card } from "antd";

function index() {
  return (
    <Row>
      <Col span={24}>
        <Card>
          <SocialMediaDispatcher />
        </Card>
      </Col>
      <Col span={24} style={{ marginTop: "40px" }}>
        <Card>
          <Form />
        </Card>
      </Col>
    </Row>
  );
}

export default index;
