import React from 'react'
import PureComponent from 'local/components/PureComponent'
import Button from 'local/components/Button'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {
  ajaxSave,
  ajaxLoad,
} from 'local/actions/counters'


const selector = createStructuredSelector({
  count: state => state.getIn(['counters', 'count'])
})


class SuperagentTest extends PureComponent {

  render() {
    const {dispatch, count} = this.props

    return (

      <div>
        <p>Superagent - persists via REST API endpoints</p>
        <p>
          <Button name="Save" onClick={() => dispatch(ajaxSave(count))}/>
          <Button name="Load" onClick={() => dispatch(ajaxLoad())}/>
        </p>

      </div>
    )
  }
}


export default connect(selector)(SuperagentTest)