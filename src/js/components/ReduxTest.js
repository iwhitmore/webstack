import React from 'react'
import {connect} from 'react-redux'
import {
  inc,
  dec,
} from '../actions/counters'
import {reset} from '../actions/root'

import PureComponent from '../components/PureComponent'
import Button from '../components/Button'



class ReduxTest extends PureComponent {

  render() {
    const {dispatch} = this.props
    
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
}

export default connect()(ReduxTest)