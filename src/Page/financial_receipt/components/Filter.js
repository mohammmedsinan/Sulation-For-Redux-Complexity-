import { Row , Input,InputNumber, Col , Form, Button} from 'antd'
import {Link} from 'react-router-dom'
import React from 'react'

function Filter() {
  return (
    <Form>
    <Row justify={"space-between"} align={"middle"}>
      <Col><Form.Item label="Name"><Input placeholder='Search by name'/></Form.Item></Col>
      <Col><Form.Item label="Order"><Input placeholder='Search by Order'/></Form.Item></Col>
        <Col><Form.Item label="Number"><InputNumber placeholder='Search by Number' /></Form.Item></Col>
        <Col>
          <Form.Item>
          <Button style={{marginRight:"30px"}} type='primary'>Search</Button>
          <Button type='default'>Reset</Button>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
           <Link className="antd-btn-primary" to={'/financial_management/financial_receipt/create'}>Create</Link>
          </Form.Item>
        </Col>
    </Row>
  </Form>
  )
}

export default Filter