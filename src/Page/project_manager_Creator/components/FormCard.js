import React, { useState, useEffect } from "react";
import { Button, Col, Form, Input, Row ,InputNumber, message, Upload, Card, Checkbox, Select} from "antd";
import { UploadOutlined  } from '@ant-design/icons';
const { Option } = Select;


function FormCard({ type = 0, fn, current }) {
  const [form] = Form.useForm();
  const [data, setData] = useState({})
  const { TextArea } = Input;
  const defaultStyle = { minWidth:"200px",maxWidth:"200px"}
  function Infos() {
    return (
    <Row justify={"space-between"} align={"top"}>
      <Col span={8}>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input your name" }]}>
          <Input placeholder="Please input the name"  style={defaultStyle}/>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="price" label="Price" rules={[{ required: true, message: "Please input your name" }]}>
          <InputNumber placeholder="Please input the price" addonAfter="$" style={defaultStyle}/>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="stock" label="Stock" rules={[{ required: true, message: "Please input your name" }]}>
          <InputNumber placeholder="Please input the stock"  style={defaultStyle}/>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="d_price" label="D-Price" rules={[{ required: true, message: "Please input your name" }]}>
          <InputNumber placeholder="Please input the delivery price" addonAfter="$"  style={defaultStyle}/>
        </Form.Item>
      </Col>
      <Col span={8}>
          <Form.Item name="disscount" label="D-Count" rules={[{ required: true, message: "Please input your name" }]}>
          <InputNumber placeholder="Please input your nickname"  style={defaultStyle}  addonAfter="%"/>
        </Form.Item>
      </Col>
      <Col span={8}>
          <Form.Item name="size" label="Size" rules={[{ required: true, message: "Please input your name" }]}>
          <InputNumber placeholder="Please input your nickname"  style={defaultStyle}  addonAfter="Cm"/>
        </Form.Item>
      </Col>
      <Col span={8}>
          <Form.Item name="rate" label="Rate" rules={[{ required: true, message: "Please input your name" }]}>
          <InputNumber placeholder="Please input Rate"  style={defaultStyle} max={5} min={0}/>
        </Form.Item>
      </Col> <Col span={8}>
          <Form.Item name="rate" label="Rate" rules={[{ required: true, message: "Please input your name" }]}>
          <InputNumber placeholder="Please input Rate"  style={defaultStyle} max={5} min={0}/>
        </Form.Item>
      </Col> <Col span={8}>
          <Form.Item name="rate" label="Rate" rules={[{ required: true, message: "Please input your name" }]}>
          <InputNumber placeholder="Please input Rate"  style={defaultStyle} max={5} min={0}/>
        </Form.Item>
      </Col>
      <Col span={10}>
          <Form.Item name="about" label="About" rules={[{ required: true, message: "Please input your name" }]}>
          <TextArea placeholder="Please input Specifications" autoSize={{minRows: 6,}}/>
        </Form.Item>
      </Col>
      <Col span={10}>
        <Form.Item name="specification" label="specific" rules={[{ required: true, message: "Please input your name" }]}>
          <TextArea placeholder="Please input Specifications" autoSize={{minRows: 6,}}/>
        </Form.Item>
      </Col>
    </Row>
    )
  }
  function Assets() {
    const props = {
      name: 'file',
      action: 'http://localhost:3000/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    const [fileList, setFileList] = useState([]);
      const propss = { onRemove: (file) => {   const index = fileList.indexOf(file);   const newFileList = fileList.slice();   newFileList.splice(index, 1);   setFileList(newFileList); }, beforeUpload: (file) => {   setFileList([...fileList, file]);   return false; }, fileList, };
      return (
      <Row justify={"space-between"} align={"middle"}>
      <Col span={8}>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input your name", }]}>
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="file" label="Extra File" rules={[{ required: true, message: "Please input your name" }]}>
            <Upload {...propss}>
           <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
        </Form.Item>
      </Col>
    </Row>
    )
  }
  function Warehouse() {
    return (
      <Row justify={"space-between"} align={"top"}>
      <Col span={8}>
        <Form.Item name="stock" label="Stock" rules={[{ required: true, message: "Please input your name" }]}>
          <InputNumber placeholder="How much stock you currently have"  style={defaultStyle}/>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item name="have_stock" label="Stock available">
          <Checkbox>Do you Currently have stock</Checkbox>
        </Form.Item>
        </Col>
        <Col span={8}>
        <Form.Item name="category" label="Category" rules={[{ required: true, message: "Please input your name" }]}>
        <Select
            mode="multiple"
            placeholder="Select your product category"
              optionLabelProp="label"
              style={defaultStyle}
          >
            <Option value="china" label="China">
              <div className="demo-option-label-item">
                <span role="img" aria-label="China">
                  🇨🇳
                </span>
                China (中国)
              </div>
            </Option>
            <Option value="usa" label="USA">
              <div className="demo-option-label-item">
                <span role="img" aria-label="USA">
                  🇺🇸
                </span>
                USA (美国)
              </div>
            </Option>
            <Option value="japan" label="Japan">
              <div className="demo-option-label-item">
                <span role="img" aria-label="Japan">
                  🇯🇵
                </span>
                Japan (日本)
              </div>
            </Option>
            <Option value="korea" label="Korea">
              <div className="demo-option-label-item">
                <span role="img" aria-label="Korea">
                  🇰🇷
                </span>
                Korea (韩国)
              </div>
            </Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
      )
  }
  return (
        <Row>
          <Col span={24}>
            <Form
            form={form}
            layout="vertical"
            name="dynamic_rule">
              <Card>
                <Col span={24}>
                  {type === 0 && <Infos />}
                </Col>
                <Col span={24}>
                  {type === 1 && <Assets />}
                </Col>
                <Col span={24}>
                  {type === 2 && <Warehouse />}
                </Col>
              </Card>
              <Col >
                <Card>
                  <Row justify={"space-around"} align={"bottom"} style={{padding:"15px 0px 0px 0px"}} >
                    <Form.Item><Button type="primary" onClick={() => current > 0&&fn(false)}>Back</Button></Form.Item>
                    <Form.Item><Button type="primary" onClick={()=> current !== 2&&fn(true)}>{current === 2 ?"Submit":"Next"}</Button></Form.Item>
                  </Row>
                </Card>
              </Col>
            </Form>
          </Col>
        </Row>

  );
}
export default FormCard;
