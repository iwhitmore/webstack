require('lie/polyfill')

import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import {Provider} from 'react-redux'
import store from '../lib/store'


function main() {
  render((
    <div>
      <Provider store={store}>
        <App/>
      </Provider>
    </div>
  ), document.getElementById('app-container'))
}

global.appMain = main

