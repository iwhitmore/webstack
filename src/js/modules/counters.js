/* @flow */
import Kinto from 'kinto'
import {createReducer} from 'redux-create-reducer'
import {createAction} from 'redux-actions'
import {agent} from 'js/lib/ajax'
import pouchDb from 'js/lib/pouchdb'
import kinto from 'js/lib/kinto'


const initialState = {
  count: 0,
  status: null,
  loaded: false,
}


export const inc = createAction('INC_COUNT')
export const dec = createAction('DEC_COUNT')
export const set = createAction('SET_COUNT')
export const reset = createAction('RESET')
export const status = createAction('SET_COUNT_STATUS')


export default createReducer(initialState, {

  INC_COUNT(state, action) {
    return Object.assign({}, state, {count: state.count + 1})
  },

  DEC_COUNT(state, action) {
    return Object.assign({}, state, {count: state.count - 1})
  },

  SET_COUNT(state, action) {
    return Object.assign({}, state, {
      count: action.payload,
      status: null,
      loaded: true,
    })
  },

  SET_COUNT_STATUS(state, action) {
    return Object.assign({}, state, {status: action.payload || null})
  },

  RESET(state, action) {
    return Object.assign({}, initialState)
  },

})


export function ajaxSave(x) {
  return dispatch => {
    dispatch(status('SAVING'))
    return agent.post('/api/count')
      .send({count:x})
      .then(res => {
        Promise.resolve(dispatch(status()))
      })
  }
}


export function ajaxLoad() {
  return dispatch => {
    dispatch(status('LOADING'))
    return agent.get('/api/count')
      .then(res => {
        Promise.resolve(dispatch(set(res.body.count)))
      })
  }
}


export function pouchInc() {
  return (dispatch, getState) => {
    dispatch(inc())
    pouchSave(getState().counters.count)(dispatch)
  }
}


export function pouchDec() {
  return (dispatch, getState) => {
    dispatch(dec())
    pouchSave(getState().counters.count)(dispatch)
  }
}


export function pouchSave(x) {
  return (dispatch) => {
    pouchDb.get('count')
      .then(doc => pouchDb.put({_id: 'count', _rev: doc._rev, value: x}))
      .then(res => Promise.resolve(status()))
      .catch(err => pouchDb.put({_id: 'count', value: x}))
  }
}


export function pouchLoad() {
  return (dispatch) => {
    return pouchDb.get('count')
      .then(res => {
        Promise.resolve(dispatch(set(res.value)))
      })
  }
}


export function kintoInc() {
  return (dispatch, getState) => {
    dispatch(inc())
    kintoSave(getState().counters.count)(dispatch)
  }
}


export function kintoDec() {
  return (dispatch, getState) => {
    dispatch(dec())
    kintoSave(getState().counters.count)(dispatch)
  }
}


export function kintoSave(x) {
  return (dispatch) => {
    return kinto.upsert({
      id: '2dcd0e65-468c-4655-8015-30c8b3a1c8f8',
      count: x
    })
      .then(Promise.resolve())
  }
}


export function kintoLoad() {
  return (dispatch) => {
    return kinto.get('2dcd0e65-468c-4655-8015-30c8b3a1c8f8')
      .then(res => {
        Promise.resolve(dispatch(set(res.data.count)))
      })
  }
}


export function kintoSync() {
  return (dispatch) => {
    return kinto.sync({
      strategy: Kinto.syncStrategy.CLIENT_WINS,
      return: 3,
      headers: {Authorization: "Basic bWF0Og=="},
    })
      .then(kintoLoad()(dispatch))
      .catch(err => {
        console.log(err)
      })
  }
}


export function parseInc() {
}

export function parseDec() {
}

export function parseLoad() {
}

export function parseSave() {
}

export function parseSync() {
}
