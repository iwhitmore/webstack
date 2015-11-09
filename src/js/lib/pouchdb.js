import PouchDB from 'pouchdb'

export const db = new PouchDB('main')

global.db = db