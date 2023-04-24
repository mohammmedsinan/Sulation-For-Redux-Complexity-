import React from "react";
import SocialMediaModal from "./socialMediaModal";
import SocialMediaOPtions from "./socialMediaOPtions";
import { Row, Col, Card } from "antd";

function index() {
  return (
    <Row>
      <Col span={24}>
        <Card>
          <SocialMediaModal />
        </Card>
      </Col>
      <Col span={24}>
        <Card>
          <SocialMediaOPtions />
        </Card>
      </Col>
    </Row>
  );
}

export default index;
