import { Card, Table } from "antd";
import React from "react";
import { Search } from "../../../Component/listSearch/index";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    phone: "023234324545",
    date: "03/14/2004",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
    phone: "023234324545",
    date: "03/14/2004",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    phone: "023234324545",
    date: "03/14/2004",
  },
];
const List = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...Search("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      ...Search("age"),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: "20%",
      ...Search("phone"),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "20%",
      ...Search("date"),
    },
  ];
  return (
    <Card>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={{ position: ["bottomCenter"] }}
      />
    </Card>
  );
};
export default List;
