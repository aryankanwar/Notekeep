const connecToMongo = require('./db');
const express       = require('express')
const app           = express()
var cors            = require('cors') 

const port          = 5000
connecToMongo();
app.use(cors())

app.use(express.json())
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})