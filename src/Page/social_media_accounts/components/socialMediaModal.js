import React, { useState } from "react";
import { Button, Col, Modal, Row } from "antd";
import { FacebookFilled,TwitterCircleFilled ,InstagramFilled,} from "@ant-design/icons";

function socialMediaModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const defaultStyle = { fontSize: "16px", padding: "20px", display: "flex", alignItems: "center", fontWeight: "bold" }
  const iconStyle = {fontSize:"25px"}
  return (
    <Row justify={"space-between"}>
       <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Col>
        <Button type="primary" style={defaultStyle} onClick={showModal}>
          <FacebookFilled style={iconStyle}/> Facebook
        </Button>
      </Col>
      <Col>
        <Button type="primary" style={defaultStyle} onClick={showModal}>
          <TwitterCircleFilled style={iconStyle} /> Twitter
        </Button>
      </Col>
      <Col>
        <Button type="primary" style={defaultStyle} onClick={showModal}>
          <InstagramFilled style={iconStyle}/> Instagram
        </Button>
      </Col>
    
    </Row>
  );
}

export default socialMediaModal;
