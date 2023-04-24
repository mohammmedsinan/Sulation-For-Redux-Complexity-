import React from "react";
import { Row, Col, Form, Input, message, Upload } from "antd";
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
const {TextArea} = Input

function Uploader() {
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
<Dragger {...props}>
    <span className="ant-upload-drag-icon">
      <InboxOutlined />
    </span>
    <span className="ant-upload-text">Images</span>
  </Dragger>
  );
}
function FormComponent() {
  return (
    <Form layout="vertical">
      <Row justify={"space-between"} >
        <Col span={8}>
          <Form.Item label="Title"><Input placeholder="Instagram , facebook title" /></Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Images or Videos"><Uploader /></Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Caption"><TextArea placeholder="Instagram , facebook title" autoSize={{minRows: 10,maxRows:10,}}
          /></Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default FormComponent;
