const express = require('express')
const bodyParser = require('body-parser')
const FalcorServer = require('falcor-express')
const Router = require('falcor-router')
const createAtom = require('js-atom').createAtom
const webpack = require('webpack')
const config = require('./webpack.config.dev')

const app = express()
var compiler = webpack(config)


// const server = require('http').Server(app)
// const io = require('socket.io')(server)



// Crazy fast database! 
const atom = createAtom({count: 0})


// Falcor routing
const TestRouter = Router.createClass([{
  route: 'count',

  get(pathSet) {
    console.log('PATH_SET', pathSet)
    return {path: ['count'], value: atom.deref().count}
  },

  set(graph) {
    console.log('GRAPH', graph)
    atom.reset({count:graph.count})
    return {jsonGraph:atom.deref()}
  },
}])


// Server middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use(express.static('static'))



app.use('/api', bodyParser.json())
app.use('/jsongraph', bodyParser.urlencoded({extended: true}))

app.use('/jsongraph', FalcorServer.dataSourceRoute((req, res) => {
  return new TestRouter()
}))

app.use((req, res, next) => {
  console.log(req.method, req.url, req.body)
  next()
})


// REST endpoints
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


// console.log('listening on port 3000')
// server.listen(3000)


// // Socket IO
// io.on('connection', (socket) => {
//   console.log('w00t')
//   atom.addWatch('socket', (key, ref, oldVal, newVal) => {
//     console.log(key, ref, oldVal, newVal)
//   })
//   // socket.emit('state', DB)
//   // socket.on('set', data => DB = data)
// })
