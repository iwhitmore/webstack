import React from 'react'
import PureComponent from 'local/components/PureComponent'
import Button from 'local/components/Button'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'


const selector = createStructuredSelector({
})


class PouchTest extends PureComponent {

  render() {
    return (
      <div>
        <p>PouchDB - persists via local DB and Couch sync</p>
      </div>
    )
  }
}


export default connect(selector)(PouchTest)