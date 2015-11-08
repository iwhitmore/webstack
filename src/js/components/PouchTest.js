import React from 'react'
import PureComponent from 'usr/components/PureComponent'
import Button from 'usr/components/Button'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {
  pouchSave,
  pouchLoad,
} from 'usr/actions/counters'


const selector = createStructuredSelector({
  count: state => state.getIn(['counters', 'counter']),
})


class PouchTest extends PureComponent {

  render() {
    return (
      <div>
        <p>PouchDB - persists via local DB and Couch sync</p>
        <p>
          <Button name="Save" onClick={() => dispatch(pouchSave(count))}/>
          <Button name="Load" onClick={() => dispatch(pouchLoad())}/>
        </p>
      </div>
    )
  }
}


export default connect(selector)(PouchTest)