import React from "react";
import List from "./List";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

function index() {
  return (
    <Card>
      <Row>
        <Col span={24}>
          <Button type="primary" style={{ marginBottom: "10px" }}>
            <Link to={"post/0"}>Create Post</Link>
          </Button>
        </Col>
        <Col span={24}>
          <List />
        </Col>
      </Row>
    </Card>
  );
}

export default index;
