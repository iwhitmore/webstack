import React from 'react'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {countSelector} from 'usr/selectors/counters'

import PureComponent from 'usr/components/PureComponent'
import Counter from 'usr/components/Counter'
import ReduxTest from 'usr/components/ReduxTest'
import SuperagentTest from 'usr/components/SuperagentTest'
import FalcorTest from 'usr/components/FalcorTest'
import PouchTest from 'usr/components/PouchTest'
import SocketIOTest from 'usr/components/SocketIOTest'


const selector = createStructuredSelector({
  count: countSelector,
})

class App extends PureComponent {

  render() {
    const {count, dispatch} = this.props
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


export default connect(selector)(App)