import { Button, Col, Divider, Row } from "antd";
import React from "react";

function DispatchSocialMedia() {
  return (
    <>
      <Divider>Post</Divider>
      <Row justify={"space-around"}>
        <Col><Button>Twitter</Button></Col>
        <Col><Button>Instagram</Button></Col>
        <Col><Button>Facebook</Button></Col>
        <Col><Button type="primary">Every Platform</Button></Col>
      </Row>
    </>
  );
}

export default DispatchSocialMedia;
