import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import PureComponent from '../components/PureComponent'


const styles = {
  counter: {
    fontSize: '3em',
    display: 'inline-block',
  },
  title: {
    fontSize: '.25em',
    textAlign: 'center',
  },
  count: {
    borderRadius: '2px',
    border: '1px solid #c0c0c0',
    background: '#f0f0f0',
    padding: '0 .3em',
  },
}


const selector = createStructuredSelector({
  count: state => state.getIn(['counters', 'count']),
  loaded: state => state.getIn(['counters', 'loaded']),
  status: state => state.getIn(['counters', 'status']),
})


class Counter extends PureComponent {

  render() {
    return (
      <div>
        <span style={styles.counter}>
          <div style={styles.title}>count</div>
          <div style={styles.count}>{this.props.count}</div>
        </span>
        <span style={{paddingLeft:20}}>
          {JSON.stringify(this.props)}
        </span>
      </div>
    )
  }
}

export default connect(selector)(Counter)