import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import root from 'local/reducers/root'


const logger = createLogger({
  collapsed: true,
  transformer: state => state.toJS(),
})

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore)


const store = createStoreWithMiddleware(root)


export default store
global.store = store