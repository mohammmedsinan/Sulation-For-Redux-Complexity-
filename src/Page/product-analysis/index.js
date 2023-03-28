import MultiLine from "./components/MultiLineChart";
import Line from "./components/LineChart";
import { Card, Col, Divider, Row } from "antd";
import React from "react";
import "./style.less";
import ProductCard from "../../Component/routeCard/index";
import { AccountBookFilled } from "@ant-design/icons";

function index() {
  const array = [{ name: "mouse" }, { name: "Keyboard" }, { name: "headset" }];
  return (
    <Row justify={"center"} align={"middle"}>
      <Col span={18}>
        <Card>
          <Line />
        </Card>
      </Col>
      <Col span={18}>
        <Card style={{ marginTop: "40px" }}>
          <MultiLine />
        </Card>
      </Col>
      <Col span={23}>
        <Card style={{ marginTop: "40px" }}>
          <h1 className="headerTitle">Product List</h1>
          <Divider />
          <Row justify={"space-around"} align={"middle"}>
            {array.map((ele) => {
              let props = {
                name: ele.name,
                url: "AccountBookFilled",
                icon: AccountBookFilled,
              };
              return <ProductCard props={props} />;
            })}
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default index;
