import React from 'react'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {countSelector} from 'local/selectors/counters'

import PureComponent from 'local/components/PureComponent'
import Counter from 'local/components/Counter'
import ReduxTest from 'local/components/ReduxTest'
import SuperagentTest from 'local/components/SuperagentTest'
import FalcorTest from 'local/components/FalcorTest'
import PouchTest from 'local/components/PouchTest'
import SocketIOTest from 'local/components/SocketIOTest'


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