import PouchDB from 'pouchdb'

export const db = new PouchDB('main')

PouchDB.debug.disable()

/* Sync to a Couch instance
const serverDB = PouchDB('...url...')


db.sync(serverDB, {
  live: true,
  retry: true,
})
*/

global.db = db