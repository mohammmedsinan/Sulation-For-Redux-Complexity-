import React from 'react'
import {Table} from 'antd'

function List({columns,data}) {
  return (
    <Table
    columns={columns}
      dataSource={data}
      bordered
      scroll={{x: 1300,}} />
  )
}

export default List