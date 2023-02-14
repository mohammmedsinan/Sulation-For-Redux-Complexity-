import { Row, Col, Card } from 'antd';
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
    <>
      <Row justify={'space-around'}>
        <Col span={11}>
          <Card>
            <Chart type="line" data={chartData} />
          </Card>
        </Col>
        <Col span={11}>
          <Card>
            <Chart type="bar" data={chartData} />
          </Card>
        </Col>
      </Row>
      <Row justify={'space-around'} style={{ marginTop: '30px' }}>
        <Col span={11}>
          <Card>
            <Chart type="pie" data={chartData} />
          </Card>
        </Col>
        <Col span={11}>
          <Card>
            <Chart type="doughnut" data={chartData} />
          </Card>
        </Col>
      </Row>

      <Col span={17}>
        <Chart type="radar" data={chartData} />
      </Col>
    </>
  );
}

export default Charts;
