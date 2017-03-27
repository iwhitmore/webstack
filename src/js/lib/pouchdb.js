import PouchDB from 'pouchdb'

const db = new PouchDB('main')
export default db

//PouchDB.debug.disable()

//const serverDB = PouchDB('http://localhost:4000/pouch')

// db.sync(serverDB, {
//   live: true,
//   retry: false,
// })

