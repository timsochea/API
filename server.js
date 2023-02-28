const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World hell')
})

app.listen(3030 , () => {
    console.log('Connected to port 3030')
})
