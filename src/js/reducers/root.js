import {combineReducers} from 'redux-immutablejs'

import counters from 'local/reducers/counters'

export default combineReducers({
  counters,
})

