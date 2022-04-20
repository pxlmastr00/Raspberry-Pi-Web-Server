const express = require('express')
const app = express()
app.use(express.static('html'))
app.get('/', function (req, res) {
  res.send('Hello World')
})
console.log("Server started.")
app.listen(3000)