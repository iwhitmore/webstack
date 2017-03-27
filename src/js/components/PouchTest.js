import React from 'react'
import Button from 'js/components/Button'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {
  pouchSave,
  pouchLoad,
  pouchInc,
  pouchDec,
} from 'js/modules/counters'
import pure from 'recompose/pure'


const selector = createStructuredSelector({
  count: state => state.counters.count,
})


function PouchTest({dispatch, count}) {
  return (
    <div>
      <p>PouchDB - persists via local DB and Couch sync</p>
      <p>
        <Button name="Increment" onClick={() => dispatch(pouchInc())}/>
        <Button name="Decrement" onClick={() => dispatch(pouchDec())}/>
        <Button name="Save" onClick={() => dispatch(pouchSave(count))}/>
        <Button name="Load" onClick={() => dispatch(pouchLoad())}/>
      </p>
    </div>
  )
}


export default connect(selector)(pure(PouchTest))
