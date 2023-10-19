import React from 'react'
import Page from '../components/Receipt'
import {Row , Col , Card} from 'antd'
function index() {
  return (
    <Row>
      <Col span={24}><Card><Page /></Card></Col>
    </Row>
  )
}

export default index