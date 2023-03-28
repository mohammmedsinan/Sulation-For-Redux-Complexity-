import { Button, Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import List from "./components";
function index(props) {
  return (
    <Card>
      <Row>
        <Col offset={22} style={{marginBottom:"10px"}}>
          <Link to={"product/0"}>
            <Button style={{height:"40px",width:"100px"}}>Create</Button>
          </Link>
        </Col>
        <Col span={24}>
          <List props={props} />
        </Col>
      </Row>
    </Card>
  );
}

export default index;
