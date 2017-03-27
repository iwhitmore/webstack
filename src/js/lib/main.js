import 'lie/polyfill'
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from 'js/components/App'
import {Provider} from 'react-redux'
import store from 'js/lib/store'

const rootEl = document.getElementById('app-container')


function render() {
  let body = (
    <Provider store={store}>
      <App/>
    </Provider>
  )
  let app = module.hot
    ? ( <AppContainer>{body}</AppContainer> )
    : body
  ReactDOM.render(app, rootEl)
}


function main() {
  render()
}

function hotReload() {
  setImmediate(() => {
    ReactDOM.unmountComponentAtNode(rootEl)
    render()
  })
}


if (module.hot) {
  module.hot.accept('js/components/App', hotReload)
  module.hot.accept('js/lib/store', hotReload)
}

// This warns when React updates unnecessarily
// if (!__PROD__) {
//   const {whyDidYouUpdate} = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }


window['appMain'] = main

