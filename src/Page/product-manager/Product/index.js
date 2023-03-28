import {
  Card,
  Col,
  Row,
  Button,
  Form,
  Input,
  InputNumber,
  Skeleton,
} from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
function index({ dispatch, state: { ProductManager } }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.pathname.split("/")[4];
  React.useEffect(() => {
    if (location.search.includes("edit")) {
      dispatch("product/details", `/products/get/${productId}`, "GET");
    }
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      form.setFieldsValue({
        name: ProductManager.data2.name,
        image: ProductManager.data2.image,
        category: ProductManager.data2.category,
        price: ProductManager.data2.price,
        stock: ProductManager.data2.stock,
      });
    }, 100);
  }, [ProductManager.data2]);

  const onFinish = (values) => {
    if (location.search.includes("edit"))  dispatch("product/edit", `/products/update/${productId}`, "PUT", values);
    if (!location.search.includes("edit"))  dispatch("product/edit", `/products/create`, "POST", values)
    if (ProductManager.status !== "loading") return navigate("/Product_Folder/product-manager");
  };
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 24,
    },
  };
  // if () return
  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100%" }}>
      <Col span={11}>
        <Card>
          {ProductManager.status === "loading" ? (
            <Skeleton active />
          ) : (
            <Form
              form={form}
              {...layout}
              name="product"
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}
              validateMessages={validateMessages}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="image"
                label="Image"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="price"
                label="Price"
                rules={[
                  {
                    type: "number",
                    min: 0,
                    required: true,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="stock"
                label="Stock"
                rules={[
                  {
                    type: "number",
                    min: 0,
                    required: true,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 12,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          )}
        </Card>
      </Col>
    </Row>
  );
}

export default index;
