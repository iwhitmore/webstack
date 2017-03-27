import React from 'react'
import Button from 'js/components/Button'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {ajaxSave, ajaxLoad} from 'js/modules/counters'
import pure from 'recompose/pure'


const selector = createStructuredSelector({
  count: state => state.counters.count,
})


function SuperagentTest({dispatch, count}) {
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

export default connect(selector)(pure(SuperagentTest))
