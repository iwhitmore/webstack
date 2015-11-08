import React from 'react'
import PureComponent from 'usr/components/PureComponent'
import Button from 'usr/components/Button'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {
  falcorSave,
  falcorLoad,
  falcorInvalidate,
} from 'usr/actions/counters'




const selector = createStructuredSelector({
  count: state => state.getIn(['counters', 'count']),
})


class FalcorTest extends PureComponent {

  render() {
    const {dispatch, count} = this.props

    return (
      <div>
        <p>Falcor - persists via JSON graph endpoint</p>
        <p>
          <Button name="Save" onClick={() => dispatch(falcorSave(count))}/>
          <Button name="Load" onClick={() => dispatch(falcorLoad())}/>
          <Button name="Invalidate" onClick={() => falcorInvalidate()}/>
        </p>

      </div>
    )
  }
}


export default connect(selector)(FalcorTest)