import React from "react";
import { Card, Col, Row } from "antd";
import "../style.css";

function notSelected() {
  return (
    <Row justify={"center"} align={"middle"}>
      <Col span={24}>
        <p id="not-selected">Please Select A platform from the dropdown at the top</p>
      </Col>
    </Row>
  );
}

export default notSelected;
