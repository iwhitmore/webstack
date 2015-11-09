//require('babel/register')({stage:0})
require('lie/polyfill')

import React from 'react'
import {render} from 'react-dom'
import App from 'usr/components/App'
import {Provider} from 'react-redux'
import store from 'usr/lib/store'


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

