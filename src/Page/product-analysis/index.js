import MultiLine from "./components/MultiLineChart";
import Line from "./components/LineChart";
import { Card, Col, Divider, Row } from "antd";
import React from "react";
import "./style.less";
import ProductCard from "../../Components/routeCard/index";
import Pie from "./components/PieChart";
import Liquid from "./components/Liquid";

function index({ dispatch, state: { AnalysisProduct } }) {
  const array = [{ name: "mouse" }, { name: "Keyboard" }, { name: "headset" }];
  React.useEffect(() => {
    dispatch("productAnalysis/all", "/products/all", "POST", {});
  }, []);
  return (
    <Row justify={"center"} align={"middle"}>
      <Col span={18}>
        <Card hoverable>
          <Line />
        </Card>
      </Col>
      <Col span={18}>
        <Card style={{ marginTop: "40px" }} hoverable>
          <MultiLine />
        </Card>
      </Col>
      <Col span={10}>
        <Card style={{ marginTop: "40px" }} hoverable>
          <Pie />
        </Card>
      </Col>
      <Col span={8}>
        <Card style={{ marginTop: "40px" }} hoverable>
          <Liquid />
        </Card>
      </Col>
      <Col span={18}>
        <Card style={{ marginTop: "40px" }}>
          <h1 className="headerTitle">Product List</h1>
          <Divider />
          <Row justify={"space-around"} align={"middle"}>
            {AnalysisProduct?.data?.product?.map((ele) => {
              let props = {
                name: ele.name,
                elementUrl: ele._id,
                img: ele.image,
                category: ele.category,
                price: ele.price,
                stock: ele.stock,
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
