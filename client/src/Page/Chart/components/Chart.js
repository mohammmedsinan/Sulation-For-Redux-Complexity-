import { Row, Col } from 'antd';
import { Chart } from 'react-chartjs-2';
import React from 'react';
import 'chart.js/auto';

function Charts() {
  const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Row justify={'center'}>
      <Col span={12}>
        <Chart type="line" data={chartData} />
      </Col>
      <Col span={12}>
        <Chart type="bar" data={chartData} />
      </Col>
      <Col span={12}>
        <Chart type="pie" data={chartData} />
      </Col>
      <Col span={12}>
        <Chart type="doughnut" data={chartData} />
      </Col>
      <Col span={17}>
        <Chart type="radar" data={chartData} />
      </Col>
    </Row>
  );
}

export default Charts;
