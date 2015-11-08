export function countSelector(state) {
  return state.getIn(['counters', 'count'])
}

export function loadedSelector(state) {
  return state.getIn(['counters', 'loaded'])
}

export function statusSelector(state) {
  return state.getIn(['counters', 'status'])
}