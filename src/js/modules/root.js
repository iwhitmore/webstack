/* @flow */
import {combineReducers} from 'redux'
import {createAction} from 'redux-actions'
import counters from 'js/modules/counters'


export default combineReducers({
  counters,
})

