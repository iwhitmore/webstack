import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import PureComponent from '../components/PureComponent'


const selector = createStructuredSelector({
  count: state => state.getIn(['counters', 'count']),
  loaded: state => state.getIn(['counters', 'loaded']),
  status: state => state.getIn(['counters', 'status']),
})


class Counter extends PureComponent {

  render() {
    return (
      <div>
        <span className="counter">
          <div className="title">count</div>
          <div className="count">{this.props.count}</div>
        </span>
        <span style={{paddingLeft:20}}>
          {JSON.stringify(this.props)}
        </span>
      </div>
    )
  }
}

export default connect(selector)(Counter)