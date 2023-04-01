import { Card, Popconfirm, Popover, Table, Typography } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import { Search } from '../../../Components/listSearch/index';

function List({ dispatch, orders }) {
  const { Text } = Typography;
  React.useEffect(() => {
    dispatch('orders/get', '/orders/all', 'POST', {});
  }, []);
  function pageRefresher() {
    setTimeout(() => {
      dispatch('orders/get', '/orders/all', 'POST', {});
    }, 400);
  }
  const columns = [
    {
      title: 'Customer Name',
      key: '_id',
      render: (data, index) => <>{index.customer.RealName}</>,
    },
    {
      title: 'Order Number',
      dataIndex: 'order_number',
      key: '_id',
      ...Search('order_number'),
    },
    {
      title: 'Order Type',
      dataIndex: 'type',
      key: '_id',
      ...Search('type'),
    },
    {
      title: 'Order Status',
      dataIndex: 'status',
      key: '_id',
      ...Search('status'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: '_id',
      ...Search('address'),
    },
    {
      title: 'Order Date',
      dataIndex: 'date',
      key: '_id',
      ...Search('date'),
    },
    {
      title: 'Stocks',
      key: '_id',
      render: (data, index) => <>{index.details.length}</>,
    },
    {
      title: 'Operation',
      key: '_id',
      width: '130px',
      render: (data, index) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Link to={`/Orders/orders-edit/${index._id}`}>Edit </Link>
            </div>
            <Popconfirm
              title="Delete"
              onConfirm={() => {
                dispatch('orders/submit', '/orders/delete', 'DELETE', { id: index._id });
                pageRefresher();
              }}
            >
              <Text
                type="danger"
                style={{
                  cursor: 'pointer',
                }}
              >
                Delete
              </Text>
            </Popconfirm>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              className="PrimaryColor"
              onClick={() => {
                dispatch('orders/submit', '/orders/close', 'PUT', { _id: index._id });
                pageRefresher();
              }}
            >
              Submit
            </div>
            <Link to={`/Orders/orders-details/${index._id}`}>Details </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <Card>
      <Table
        columns={columns}
        dataSource={orders.data.data}
        bordered
        pagination={{
          position: ['bottomCenter'],
          pageSize: orders.data.pageSize,
          total: orders.data.total,
        }}
        loading={orders.status === 'loading'}
      />
    </Card>
  );
}
export default List;
