const express = require('express')
const bodyParser = require('body-parser')
const FalcorServer = require('falcor-express')
const Router = require('falcor-router')
const app = express()


// Crazy fast database! 
const DB = {count: 0}


// Falcor routing
const TestRouter = Router.createClass([{
  route: 'count',

  get: function(pathSet) {
    return {path: ['count'], value: DB.count}
  },

  set: function(graph) {
    console.log('GRAPH', graph)
    DB.count = graph.count
    return {jsonGraph:DB}
  }
}])



// Server middleware
app.use(express.static('dist'))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/jsongraph', FalcorServer.dataSourceRoute((req, res) => {
  return new TestRouter()
}))

app.use((req, res, next) => {
  console.log(req.method, req.url, req.body)
  next()
})




// REST endpoints
app.get('/api/count', (req, res) => {
  res.send(DB)
})

app.post('/api/count', (req, res) => {
  DB.count = req.body.count
  res.send(DB)
})


// Run the server
app.listen(3000, () => {
  console.log('listening on port 3000')
})



