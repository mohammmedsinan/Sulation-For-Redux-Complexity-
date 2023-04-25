import React from "react";
import { Row, Col, Card } from "antd";
import Filter from "./Filter";
import List from "./List";

function index() {
  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
      sorter: true,
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',
    },
    {
      title: 'Column 8',
      dataIndex: 'address',
      key: '8',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    }, {
      key: '3',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    }, {
      key: '4',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    }, {
      key: '5',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    }, {
      key: '6',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
  ];
  return (
    <Row>
      <Col span={24}>
        <Card>
          <Filter />
        </Card>
      </Col>
      <Col span={24}>
        <Card>
          <List columns={columns} data={data}/>
        </Card>
      </Col>
    </Row>
  );
}

export default index;
