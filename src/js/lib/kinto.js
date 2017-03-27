import Kinto from 'kinto'

const db = new Kinto({remote: 'http://localhost:4000/v1'})
const counter = db.collection('counter')


export default counter
