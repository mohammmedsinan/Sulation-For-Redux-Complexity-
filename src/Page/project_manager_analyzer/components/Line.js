import React from "react";
import { LineAPI } from '../../../public/LineAPI'
import {Line} from '@ant-design/plots'

function LineChart() {
  const config = {
    data:LineAPI,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };
  return <Line {...config} />;
}

export default LineChart;
