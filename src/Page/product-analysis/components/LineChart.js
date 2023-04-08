import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";

function LineChart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
  }, []);
  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      // type: 'timeCat',
      tickCount: 3  ,
    },
      smooth: true,
  };
  return (
    <div>
      <Line {...config} />
    </div>
  );
}

export default LineChart;
