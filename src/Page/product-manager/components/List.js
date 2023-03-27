import { Card, Table } from "antd";
import React from "react";
import { Search } from "../../../Component/listSearch/index";
import moment from "moment";
import { Link } from "react-router-dom";

const deleteStyle = {
  color: "red",
  cursor: "pointer",
};
const editStyle = {
  color: "#f809",
  cursor: "pointer",
  margin: "0px 10px",
};
function List({ props }) {
  const fetcher = () =>
    props.dispatch("product/all", "/products/all", "POST", {});
  React.useEffect(() => {
    fetcher();
  }, []);
  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...Search("name"),
    },
    {
      title: "Age",
      dataIndex: "category",
      key: "category",
      width: "20%",
      ...Search("category"),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "20%",
      ...Search("price"),
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      width: "20%",
      ...Search("stock"),
    },
    {
      title: "Date",
      key: "createdDate",
      width: "20%",
      render: (ele) => <>{moment.unix(ele.createdDate).format("MM/DD/YYYY")}</>,
    },
    {
      title: "Units sold",
      key: "_id",
      width: "20%",
      render: (ele) => <>{ele.bought_items.length}</>,
    },
    {
      title: "Operation",
      key: "_id",
      width: "30%",
      render: (ele) => (
        <div style={{ display: "flex" }}>
          <p
            style={deleteStyle}
            onClick={() => {
              props.dispatch(
                "product/delete",
                `products/delete/${ele._id}`,
                "DELETE",
                {}
              );
              setTimeout(() => {
                fetcher();
              }, 600);
            }}
          >
            Delete
          </p>
          <Link
            style={editStyle}
            to={`/Product_Folder/product-manager/product-edit/${ele._id}`}
          >
            Edit
          </Link>
        </div>
      ),
    },
  ];
  return (
    <Card>
      <Table
        columns={columns}
        dataSource={props.state.ProductManager.data.product}
        bordered
        pagination={{ position: ["bottomCenter"] }}
      />
    </Card>
  );
}
export default List;
