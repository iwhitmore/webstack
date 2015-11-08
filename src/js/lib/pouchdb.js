import PouchDB from 'pouchdb'

const db = new PouchDB('main')

db.changes().on('change', blah => {
  console.log('blah', blah)
  console.log('w00t')
})

export default db

global.db = db