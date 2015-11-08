import React from 'react'
import PureComponent from 'local/components/PureComponent'


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

