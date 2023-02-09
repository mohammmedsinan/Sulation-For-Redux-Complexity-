import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Input, Space, Table } from 'antd';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';

function List({ dispatch, users }) {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  React.useEffect(() => {
    dispatch('users/get', '/users/all', 'POST', {});
  }, []);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Name',
      dataIndex: 'username',
      key: 'username',
      width: '20%',
      ...getColumnSearchProps('username'),
    },
    {
      title: 'Avatar',
      dataIndex: 'Avatar',
      key: 'Avatar',
      width: '20%',
      ...getColumnSearchProps('Avatar'),
    },
    {
      title: 'RealName',
      dataIndex: 'RealName',
      key: 'RealName',
      width: '20%',
      ...getColumnSearchProps('RealName'),
    },
    {
      title: 'Id',
      dataIndex: '_id',
      key: '_id',
      width: '20%',
      ...getColumnSearchProps('_id'),
    },
    {
      title: 'createdDate',
      dataIndex: 'createdDate',
      key: 'createdDate',
      width: '20%',
      ...getColumnSearchProps('createdDate'),
    },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    //   //   width: '30%',
    //   ...getColumnSearchProps('address'),
    //   sorter: (a, b) => a.address.length - b.address.length,
    //   sortDirections: ['descend', 'ascend'],
    // },
    ,
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
