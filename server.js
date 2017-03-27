const express = require('express')
const bodyParser = require('body-parser')
const {createAtom} = require('js-atom')
const PouchDB = require('pouchdb')



const app = express()


// Database instances 
const atom = createAtom({count: 0})


// Static resources
app.use(express.static('static'))




// Log requests
app.use((req, res, next) => {
  console.log(req.method, req.url, req.body)
  next()
})


// Pouch endpoint
const InMemPouchDB = PouchDB.defaults({db: require('memdown')})
app.use('/db', require('express-pouchdb')(InMemPouchDB))

const db = new InMemPouchDB('main')


// REST API
app.use('/api', bodyParser.json())

app.get('/api/count', (req, res) => {
  res.send(atom.deref())
})

app.post('/api/count', (req, res) => {
  atom.reset({count: req.body.count})
  res.send(atom.deref())
})


app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:3000')
})

