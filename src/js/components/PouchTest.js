import React from 'react'
import PureComponent from '../components/PureComponent'
import Button from '../components/Button'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {
  pouchSave,
  pouchLoad,
} from '../actions/counters'


const selector = createStructuredSelector({
  count: state => state.getIn(['counters', 'count']),
})


class PouchTest extends PureComponent {

  render() {
    const {dispatch, count} = this.props

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