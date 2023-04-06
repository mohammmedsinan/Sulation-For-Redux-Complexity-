import React from "react";
import { Col, Row, Card, Select, Divider } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Line from './charts/LinePolt'
import Bubble from './charts/liquid'
import Column from './charts/column'
import Pie from './charts/PieChart'

function layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [route, setRoute] = React.useState(() => {
    const optionsLR = [{value: "twitter"},{value: "facebook"},{value: "instagram"},{value: "all"}];
    let finder = undefined;
    if (location.search != "") finder = optionsLR.find((option) => option.value === location.search.split("=")[1].toLowerCase() );
    if (location.search == "")finder = undefined;
    if (finder === undefined)return "Not Selected";
    if (finder !== undefined)return location.search.split("=")[1].toLowerCase();
  });
  const options = [
    {
      value: "twitter",
      label: "Twitter",
      disabled: route === "twitter",
    },
    {
      value: "facebook",
      label: "Facebook",
      disabled: route === "facebook",
    },
    {
      value: "instagram",
      label: "Instagram",
      disabled: route === "instagram",
    },
    {
      value: "all",
      label: "All",
      disabled: route === "All",
    },
  ];
  React.useEffect(() => {
    let query = location.search !== "" && location.search.split("=")[1].toLowerCase();
    if (location.search !== "") {
      if (query == "") setRoute("Not Selected");
      if (query == "twitter") setRoute("twitter");
      if (query == "instagram") setRoute("instagram");
      if (query == "facebook") setRoute("facebook");
      if (query == "all") setRoute("All");
    }
  }, [location.search]);
  const handleChange = (value) => { navigate(`?s=${value}`) };
  return (
    <Row>
      <Col span={24}>
        <Card>
          <Row justify={"center"}>
            <Col></Col>
            <Col>
              <Select
                style={{width: 160}}
                defaultValue={route}
                onChange={handleChange}
                options={options}
              />
            </Col>
            <Col></Col>
            <Divider><h1>Status</h1></Divider>
            <Col span={24} style={{ marginTop: "30px" }}>
              {/* {children} */}
              {route !== "Not Selected" &&
                <Row>
                <Col span={12}>
                <Divider>Line</Divider>
                   <Line />
                </Col>
                <Col span={12}>
                <Divider>Bubble</Divider>
                   <Bubble />
                </Col>
                <Col span={12}>
                <Divider>Column</Divider>
                   <Column />
                </Col>
                <Col span={12}>
                <Divider>Pie</Divider>
                   <Pie />
                </Col>
              </Row>}
              
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default layout;
