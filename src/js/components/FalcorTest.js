import React from 'react'
import PureComponent from 'local/components/PureComponent'
import Button from 'local/components/Button'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {
  falcorSave,
  falcorLoad,
  falcorInvalidate,
} from 'local/actions/counters'




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