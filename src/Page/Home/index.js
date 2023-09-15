import {Link} from 'react-router-dom'
import React from 'react'

function index() {
  return (
    <div>
      <Link to='/financial_management/financial_budget'> Back to the dashboard</Link>
    </div>
  )
}

export default index;