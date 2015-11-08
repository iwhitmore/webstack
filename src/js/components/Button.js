import React from 'react'
import PureComponent from 'usr/components/PureComponent'


class Button extends PureComponent {

  render() {
    const {name, onClick} = this.props
    
    return (
      <button onClick={() => onClick()}>
        {name}
      </button>
    )
  }
}

export default Button

