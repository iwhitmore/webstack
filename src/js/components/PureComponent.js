import {Component} from 'react'
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin'


class PureComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shouldComponentUpdate.call(this, nextProps, nextState)
  }
}

export default PureComponent