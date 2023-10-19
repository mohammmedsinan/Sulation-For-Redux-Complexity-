import React from 'react'
import {Row , Col , Input , Button} from 'antd'

function Invite() {
  return (
    <Row justify={"space-between"}>
      <Col span={15}><Input placeholder='Employee E-mail'/></Col>
      <Col><Button type='primary'>Invite</Button></Col>
    </Row>
  )
}

export default Invite