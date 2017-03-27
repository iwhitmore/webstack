import React from 'react'
import Button from 'js/components/Button'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {
  kintoSave,
  kintoLoad,
  kintoInc,
  kintoDec,
  kintoSync,
} from 'js/modules/counters'
import pure from 'recompose/pure'


const selector = createStructuredSelector({
  count: state => state.counters.count,
})


function KintoTest({dispatch, count}) {
  return (
    <div>
      <p>Kinto - persists via Kinto Sync</p>
      <p>
        <Button name="Increment" onClick={() => dispatch(kintoInc())}/>
        <Button name="Decrement" onClick={() => dispatch(kintoDec())}/>
        <Button name="Save" onClick={() => dispatch(kintoSave(count))}/>
        <Button name="Load" onClick={() => dispatch(kintoLoad())}/>
        <Button name="Sync" onClick={() => dispatch(kintoSync())}/>
      </p>
    </div>
  )
}


export default connect(selector)(pure(KintoTest))
