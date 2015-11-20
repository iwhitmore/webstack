import React from 'react'
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


class App extends PureComponent {

  render() {
    return (
      <div className="parent">
        <Counter/>
        <hr/>
        <ReduxTest/>
        <hr/>
        <SuperagentTest/>
        <hr/>
        <FalcorTest/>
        <hr/>
        <PouchTest/>
        <hr/>
        <SocketIOTest/>
      </div>
    )
  }
}

export default App