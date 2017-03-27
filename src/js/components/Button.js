import React from 'react'
import pure from 'recompose/pure'


const styles = {
  background: '#60a0df',
  border: '1px solid #3080bf',
  borderRadius: '2px',
  marginTop: 0,
  marginBottom:0,
  marginLeft: '0',
  marginRight:'10px',
  color: 'white',
  fontSize: '1em',
  padding: '.3em .5em',
  transition: 'all 0.3s ease',
  ':hover': {
    background: '#70b0ef',
  }
}


function Button({name, onClick}) {
  return (
    <button style={styles} onClick={() => onClick()}>
      {name}
    </button>
  )
}

export default pure(Button)

