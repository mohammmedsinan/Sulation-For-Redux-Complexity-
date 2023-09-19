import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/plots';
import {Primary} from 'color'
const DemoGauge = () => {
  const config = {
    percent: 0.55,
    range: {
      color: Primary,
    },
    indicator: {
      pointer: {
        style: {
          stroke: Primary,
        },
      },
      pin: {
        style: {
          stroke: Primary,
        },
      },
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
        style: {
          color: Primary,
          fontSize: 48,
        },
      },
    },
  };
  console.log(Primary)
  return <Gauge {...config} />;
};

export default DemoGauge;