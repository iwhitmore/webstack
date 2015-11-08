import superagent from 'superagent'
import withPromise from 'superagent-promise'

export const agent = withPromise(superagent, Promise)
