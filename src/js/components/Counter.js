import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import pure from 'recompose/pure'


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
  count: state => state.counters.count,
  loaded: state => state.counters.loaded,
  status: state => state.counters.status,
})



function Counter(props) {
  return (
    <div>
      <span style={styles.counter}>
        <div style={styles.title}>count</div>
        <div style={styles.count}>{props.count}</div>
      </span>
      <span style={{paddingLeft:20}}>
        {JSON.stringify(props)}
      </span>
    </div>
  )
}


export default connect(selector)(pure(Counter))
