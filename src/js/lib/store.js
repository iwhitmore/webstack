import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {createEpicMiddleware} from 'redux-observable'
import root from 'js/modules/root'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//const epicMiddleware = createEpicMiddleware()


const logger = createLogger({
  collapsed: true,
})

const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(thunk)
  //applyMiddleware(epicMiddleware)
)(createStore)


const store = createStoreWithMiddleware(root)


export default store
