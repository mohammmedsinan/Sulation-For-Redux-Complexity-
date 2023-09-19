import React from "react";
import { Row, Col } from "antd";
import "../style.css";
import { CaretUpFilled ,CaretDownFilled } from "@ant-design/icons";

function Budget() {
  return (
    <Row justify={"space-evenly"} align={"middle"}>
        <Col><CaretDownFilled id="downArrow" style={{color:"#ec5d5d"}}/></Col>
        <Col><span id="budget-number">120,321,203.00$</span></Col>
        <Col><CaretUpFilled id="upArrow" style={{color:"#5dec8e"}}/></Col>
    </Row>
  );
}

export default Budget;
