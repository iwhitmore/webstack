import React from 'react'
import Radium from 'radium'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {countSelector} from '../selectors/counters'

import PureComponent from '../components/PureComponent'
import Counter from '../components/Counter'
import ReduxTest from '../components/ReduxTest'
import SuperagentTest from '../components/SuperagentTest'
import FalcorTest from '../components/FalcorTest'
import PouchTest from '../components/PouchTest'
import SocketIOTest from '../components/SocketIOTest'


const styles = {
  padding: '10px',
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '14px',
}


class App extends PureComponent {

  render() {
    return (
      <div style={styles}>
        <Counter/>
        <hr/>
        <ReduxTest/>
        <hr/>
        <SuperagentTest/>
        <hr/>
        <FalcorTest/>
        <hr/>
        <PouchTest/>
      </div>
    )
  }
}

export default Radium(App)