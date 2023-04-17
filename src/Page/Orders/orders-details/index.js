import { Card, Col, List, Row, Typography } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
const { Title } = Typography;
function index({
  dispatch,
  state: {
    Orders: { details },
  },
}) {
  const location = useLocation();
  React.useEffect(() => {
    dispatch(`orders/details`, `/orders/get/${location.pathname.split('/')[3]}`, 'GET');
  }, []);
  return (
    <Card>
      <Row gutter={[0, 20]}>
        <Col offset={8}>
          <Title level={1}>
            <p className="PrimaryColor">
              {details?.customer?.RealName} / {details?.order_number}
            </p>
          </Title>
        </Col>
        <Col span={24}>
          <Card>
            <Row justify={'center'}>
              <Col span={5}>
                Address : <strong className="PrimaryColor">{details?.address}</strong>
              </Col>
              <Col span={3}>
                Status : <strong className="PrimaryColor">{details?.status}</strong>
              </Col>
              <Col span={3}>
                Type : <strong className="PrimaryColor">{details?.type}</strong>
              </Col>
              <Col span={5}>
                Date : <strong className="PrimaryColor">{details?.date}</strong>
              </Col>
              <Col span={5}>
                Costumer Id : <strong className="PrimaryColor">{details?.customer?._id}</strong>
              </Col>
              <Col span={24} style={{ marginTop: '60px' }}>
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                  }}
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <Card title={item.title}>Card content</Card>
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default index;
