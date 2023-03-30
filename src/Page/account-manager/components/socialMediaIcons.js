import React, { useState } from "react";
import { Row, Col, Card, Modal } from "antd";
import {
  TwitterCircleFilled,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";
import "../style.less";
function socialMediaIcons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({});
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Row>
      <Modal
        title={`${data.name} Authentication`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents {data.name} ....</p>
        <p>Some contents {data.name} ....</p>
        <p>Some contents {data.name} ....</p>
      </Modal>

      <Col span={24}>
        <Card>
          <Row justify={"space-evenly"} align={"middle"}>
            <Col
              className="lContainer"
              id="lContainer-1"
              onClick={() => {
                showModal();
                setData({ name: "Twitter" });
              }}
            >
              <div className="logoContainer">
                <TwitterCircleFilled className="logo" />
                <span>Twitter</span>
              </div>
            </Col>
            <Col
              className="lContainer"
              id="lContainer-2"
              onClick={() => {
                showModal();
                setData({ name: "Instagram" });
              }}
            >
              <div className="logoContainer">
                <InstagramFilled className="logo" />
                <span>Instagram</span>
              </div>
            </Col>
            <Col
              className="lContainer"
              id="lContainer-3"
              onClick={() => {
                showModal();
                setData({ name: "Facebook" });
              }}
            >
              <div className="logoContainer">
                <FacebookFilled className="logo" />
                <span>Facebook</span>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24} style={{ marginTop: "30px" }}>
        <Row justify={"space-around"} align={"middle"}>
          <Card>
            <Col>DDD</Col>
          </Card>
          <Card>
            <Col>DDD</Col>
          </Card>
        </Row>
      </Col>
    </Row>
  );
}

export default socialMediaIcons;
