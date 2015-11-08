import PouchDB from 'pouchdb'

const db = new PouchDB('main')

export default db

global.db = db