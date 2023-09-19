import React from "react";
import { LineAPI } from '../../../public/LineAPI';
import { Line } from '@ant-design/plots';
import {Primary} from 'color'

function LineChart() {
  const config = {
    data:LineAPI,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    color:Primary ,
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };
  return <Line {...config} />;
}

export default LineChart;
