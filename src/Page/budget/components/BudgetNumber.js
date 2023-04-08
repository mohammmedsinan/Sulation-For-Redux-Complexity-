import React from 'react'
import '../style.less'

function BudgetNumber({money}) {
  return (
      <div id='money'>{money.toLocaleString(undefined, {maximumFractionDigits:2})}$</div>
  )
}

export default BudgetNumber