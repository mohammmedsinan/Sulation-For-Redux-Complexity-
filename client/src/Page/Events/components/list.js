import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Image, Popconfirm, Table, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { Dispatch } from 'API';
import React from 'react';

const { Text } = Typography;

function onConfirm({ _id }) {
  Dispatch('events/delete', `/events/delete/${_id}`, 'DELETE');
  setTimeout(() => {
    Dispatch('events/get', '/events/all', 'POST', {});
  }, 500);
}
const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    width: '300px',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '150px',
  },
  {
    title: 'img',
    key: 'img',
    render: ({ img }) => <Image src={img} width={100} />,
    width: '300px',
  },
  {
    title: 'about',
    dataIndex: 'about',
    key: 'about',
  },
  {
    title: 'link',
    dataIndex: 'link',
    key: 'link',
  },
  {
    title: 'Operations',
    render: (data) => (
      <>
        <Popconfirm
          title="Are you sure to delete this task?"
          onConfirm={() => onConfirm(data)}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">Delete</a>
        </Popconfirm>
        <Link to={`/events/create-event/${data._id}?edit=true`} style={{ margin: '0px 10px' }}>
          <Text type="warning">Edit</Text>
        </Link>
      </>
    ),
    key: '_id',
    width: '150px',
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
  const data = useSelector((state) => state?.Events);
  return (
    <>
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
    </>
  );
};
export default List;
