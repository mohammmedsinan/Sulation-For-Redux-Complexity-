import React from "react";
import { Row, Col, Card } from "antd";
import FormComponent from "./FormComponent";
import Checker from "./socialMediaChecker";

function index() {
  return (

      <Row>
        <Col span={24}>
          <Card>
            <Checker />
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <FormComponent />
          </Card>
        </Col>
      </Row>
  );
}

export default index;
