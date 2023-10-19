import React from "react";
import Line from "./Line";
import Pie from "./Pie";
import Gauge from "./gauge";
import { Row, Col, Card } from "antd";

function index() {
  return (
    <Row justify={"space-between"}>
      <Col span={24}>
        <Card>
          {/* Chart that display How much the Store get */}
          <Line />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          {/* Chart that display How much client are buying or just send the product to the cart or who almost buy it */}
          <Pie />
        </Card>
      </Col>
      <Col span={11}>
        <Card>
          {/* Gauge will count every growth in the e-Commerce with engagement */}
          <Gauge />
        </Card>
      </Col>
    </Row>
  );
}

export default index;
