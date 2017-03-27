import React from 'react'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {countSelector} from 'js/selectors/counters'
import pure from 'recompose/pure'

import Counter from 'js/components/Counter'
import ReduxTest from 'js/components/ReduxTest'
import SuperagentTest from 'js/components/SuperagentTest'
import PouchTest from 'js/components/PouchTest'
import KintoTest from 'js/components/KintoTest'


const styles = {
  padding: '10px',
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '14px',
}


function App() {
  return (
    <div style={styles}>
      <Counter/>
      <hr/>
      <ReduxTest/>
      <hr/>
      <SuperagentTest/>
      <hr/>
      <PouchTest/>
      <hr/>
      <KintoTest/>
    </div>
  )
}


export default pure(App)
