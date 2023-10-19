import React from 'react'
import {Button, Card , Col , Row } from 'antd'

function socialMediaOPtions() {
  return (
    <Row justify={"space-between"}>
      <Col><Button>Diss-Connect</Button></Col>
      <Col><Button>Reset</Button></Col>
      <Col><Button>Connect</Button></Col>
    </Row>
  )
}

export default socialMediaOPtions