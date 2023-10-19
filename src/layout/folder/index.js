import React from "react";
import RouteCard from "../../Components/routeCard";
import { Routers } from "routes";
import { Card, Row } from "antd";
function index({ id }) {
  const [routers, setRouters] = React.useState([]);
  React.useEffect(() => {
    const includesRoute = Routers.filter((route) => route.parentId === id);
    setRouters(includesRoute);
  }, []);
  return (<Row justify={"space-around"} align={"middle"} style={{ height: "80%" }}>{routers.map((route) =>  <RouteCard props={route} />)}</Row>);
}
export default index;
