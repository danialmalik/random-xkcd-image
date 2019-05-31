const express = require('express')
const controller = require('./controller');
const app = express()
const port = 3000

app.get('/', controller.get)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
