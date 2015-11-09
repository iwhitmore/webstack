import {createAction} from 'redux-actions'
import {batchModel} from 'usr/lib/falcor'
import {agent} from 'usr/lib/ajax'
import {db} from 'usr/lib/pouchdb'


export const inc = createAction('INC_COUNT')
export const dec = createAction('DEC_COUNT')
export const set = createAction('SET_COUNT')
export const status = createAction('SET_COUNT_STATUS')


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


export function falcorSave(x) {
  return dispatch => new Promise(resolve => {
    dispatch(status('LOADING'))
    batchModel.setValue('count', x)
    .then(res => resolve(dispatch(status())))
  })
}


export function falcorLoad() {
  return dispatch => new Promise(resolve => {
    dispatch(status('SAVING'))
    batchModel.getValue('count')
    .then(res => resolve(dispatch(set(res))))
  })
}


export function falcorInvalidate() {
  batchModel.invalidate('count')
}


export function pouchSave(x) {
  return dispatch => {
    return db.get('count')
    .then(doc =>  db.put({value:x}, 'count', doc._rev))
    .then(res => {
      Promise.resolve(dispatch(status()))
    })
  }
}


export function pouchLoad() {
  return dispatch => {
    return db.get('count')
    .then(res => {
      Promise.resolve(dispatch(set(res.value)))
    })
  }
}

