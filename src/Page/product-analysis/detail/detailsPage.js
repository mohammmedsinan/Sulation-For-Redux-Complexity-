import React from "react";
import LineChart from "../components/LineChart";
import { Row, Col, Divider } from "antd";
import "../style.css";
import Title from "../../../Components/textTitle/index";

function detailsPage({ state }) {
  return (
    <Row justify={"center"}>
      <Col>
        <Title title={state?.details?.name} />
      </Col>
      <Col span={24}>
        <LineChart />
      </Col>
    </Row>
  );
}

export default detailsPage;
