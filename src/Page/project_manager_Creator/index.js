import React from "react";
import Progress from './components/progress'
import "./style.css";
import { Card, Col, Row } from "antd";

function index() {
  return (
    <Row>
      <Col span={24}>
        <Card><Progress /></Card>
      </Col>
    </Row>
  );
}

export default index;
