import React from "react";
import BudgetNum from "./BudgetNumber";
import Operations from "./operations";
import { Row, Col, Card, Divider } from "antd";

function index() {
  const [money, setMoney] = React.useState(1993465.55);
  return (
    <Row>
      <Col span={24}>
        <Card>
          <Divider><h1>Budget</h1></Divider>
          <BudgetNum money={money} />
        </Card>
      </Col>{" "}
      <Col span={24} style={{ marginTop: "40px" }}>
        <Card>
          <Operations setMoney={setMoney} />
        </Card>
      </Col>
    </Row>
  );
}

export default index;
