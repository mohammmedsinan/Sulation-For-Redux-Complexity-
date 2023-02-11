import { Card, Table } from 'antd';
import React from 'react';
import { Search } from '../../../Component/listSearch/index';

function List({ dispatch, users }) {
  React.useEffect(() => {
    dispatch('users/get', '/users/all', 'POST', {});
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'username',
      key: 'username',
      width: '20%',
      ...Search('username'),
    },
    {
      title: 'Avatar',
      dataIndex: 'Avatar',
      key: 'Avatar',
      width: '20%',
      ...Search('Avatar'),
    },
    {
      title: 'RealName',
      dataIndex: 'RealName',
      key: 'RealName',
      width: '20%',
      ...Search('RealName'),
    },
    {
      title: 'Id',
      dataIndex: '_id',
      key: '_id',
      width: '20%',
      ...Search('_id'),
    },
    {
      title: 'createdDate',
      dataIndex: 'createdDate',
      key: 'createdDate',
      width: '20%',
      ...Search('createdDate'),
    },
  ];

  return (
    <Card>
      <Table
        columns={columns}
        dataSource={users.data.data}
        bordered
        pagination={{ position: ['bottomCenter'], pageSize: users.pageSize, total: users.total }}
        loading={users.status === 'loading'}
      />
    </Card>
  );
}
export default List;
