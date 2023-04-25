import React from 'react'
import {Row, Col , Card } from 'antd'
import Budget from './Budget'
import Operation from './operation'
function index() {
  return (
      <Row>
          <Col span={24}><Card><Budget /></Card></Col>
          <Col span={24}><Card><Operation /></Card></Col>
    </Row>
  )
}

export default index