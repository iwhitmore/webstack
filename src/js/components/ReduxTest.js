import React from 'react'
import {connect} from 'react-redux'
import {inc, dec, reset} from 'js/modules/counters'
import pure from 'recompose/pure'

import Button from 'js/components/Button'



function ReduxTest({dispatch}) {
  return (
    <div>
      <p>Redux only - no persistence</p>
      <p>
        <Button name="Increment" onClick={() => dispatch(inc())}/>
        <Button name="Decrement" onClick={() => dispatch(dec())}/>
        <Button name="Reset" onClick={() => dispatch(reset())}/>
      </p>
    </div>
  )

}

export default connect()(pure(ReduxTest))
