import Parse from 'parse'

Parse.initialize('webstack')
Parse.serverURL = 'http://localhost:4000/parse'

const Counter = Parse.Object.extend('counter')

const counter = new Counter()

export default counter 
