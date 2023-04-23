import { Card, Col, Divider, Popover, Row, Steps } from "antd";
import React, { useState } from "react";
import Form from "./FormCard";

const customDot = (dot, { status, index ,title}) => (
  <Popover
    content={
      <span>
        {title } now is on {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
 function progress() {
  const [current, setCurrent] = useState(0);
   function Counter(increment) {
     if(increment) setCurrent(current + 1);
     if(!increment) setCurrent(current - 1);
  }
  return (
    <Row>
      <Steps
        current={current}
        progressDot={customDot}
        items={[{title:"Information"},{title: "Assets"},{title: "Warehouse"}]} />
        <Divider />
        <Steps />
        <Col span={24} style={{minHeight:"500px"}}>
          <Form type={current} fn={Counter} current={current} />
        </Col>
    </Row>
  );
}

export default progress