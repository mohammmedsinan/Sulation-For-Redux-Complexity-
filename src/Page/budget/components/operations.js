import React from "react";
import Modal from "./Modal";
import { Button, Row, Col, Divider } from "antd";

function operations({ setMoney }) {
  const [modal, setModal] = React.useState(false);
  const [type, setType] = React.useState("");
  return (
    <div>
      <Divider>Money Operations</Divider>
      <Modal modal={modal} setModal={setModal} type={type} />
      <Row justify={"space-around"}>
        <Col>
          <Button type="primary" onClick={() => {
            setModal(true);
            setType("add");
          }}>Deposit</Button>
        </Col>
        <Col>
          <Button type="primary" onClick={() => {
            setModal(true);
            setType("withdraw");
          }}>Withdraw</Button>
        </Col>
      </Row>
    </div>
  );
}

export default operations;
