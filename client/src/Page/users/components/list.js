import { Table } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    width: '300px',
  },
  {
    title: 'Name',
    dataIndex: 'username',
    key: 'username',
    width: '150px',
  },
  {
    title: 'Avatar',
    dataIndex: 'Avatar',
    key: 'Avatar',
    width: '200px',
  },

  {
    title: 'Followers',
    render: (e) => <>{e.Followers.length}</>,
    key: 'Followers',
    width: '150px',
  },
  {
    title: 'Following',
    render: (e) => <>{e.Following.length}</>,
    key: 'Following',
  },
];

const List = () => {
  const location = useLocation();
  const history = useNavigate();
  let search = {
    pagesize:
      Math.floor(location.search.substring(1)) === 0
        ? 1
        : Math.floor(location.search.substring(1).split('=')[1]),
  };
  function onChange(state) {
    if (location.search === '') {
      history(`${location.pathname}?pagesize=${state.current}`);
    } else {
      history(`${location.pathname}?pagesize=${state.current}`);
    }
  }
  const data = useSelector((state) => state?.Users);
  return (
    <Table
      onChange={onChange}
      bordered
      loading={data?.status === 'loading'}
      columns={columns}
      dataSource={data?.data?.data}
      pagination={{
        defaultCurrent: search.pagesize,
        current: search.pagesize,
        position: ['bottomCenter'],
        pageSize: data.data.pageSize,
        total: data.data.total,
      }}
    />
  );
};
export default List;
