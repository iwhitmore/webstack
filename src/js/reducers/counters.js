import {fromJS} from 'immutable'
import {createReducer} from 'redux-immutablejs'


const initialState = fromJS({
  count: 0,
  status: null,
  loaded: false,
})


export default createReducer(initialState, {

  INC_COUNT(state, action) {
    return state.update('count', x => x + 10)
  },

  DEC_COUNT(state, action) {
    return state.update('count', x => x - 1)
  },

  SET_COUNT(state, action) {
    return state.merge({
      count: action.payload,
      status: null,
      loaded: true,
    })
  },

  SET_COUNT_STATUS(state, action) {
    return state.set('status', action.payload || null)
  },
  
  RESET: (state, action) => initialState,
  
})

