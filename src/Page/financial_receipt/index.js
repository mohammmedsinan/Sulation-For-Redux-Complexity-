import React from 'react'
import {Row,Col,Card } from 'antd'
import Page from './components'

function index() {
  return (
    <Row>
      <Col span={24}>
      <Page />
      </Col>
    </Row>
  )
}

export default index