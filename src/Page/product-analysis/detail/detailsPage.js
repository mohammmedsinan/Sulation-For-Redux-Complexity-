import React from "react";
import LineChart from "../components/LineChart";
import { Row, Col, Divider } from "antd";
import "../style.less";

function detailsPage({ state }) {
  return (
    <Row justify={"center"}>
      <Col>
        <h1 id="detailsHeader">{state?.details?.name}</h1>
      </Col>
      <Col span={24}>
        <LineChart />
      </Col>
    </Row>
  );
}

export default detailsPage;
