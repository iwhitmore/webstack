import React from 'react'
import PureComponent from '../components/PureComponent'
import Button from '../components/Button'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'


const selector = createStructuredSelector({
})


class SocketIOTest extends PureComponent {

  render() {
    return (
      <div>
        <p>SocketIO - persists via Socket</p>
      </div>
    )
  }
}


export default connect(selector)(SocketIOTest)