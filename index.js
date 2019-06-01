const express = require('express')
const app = express()

const controller = require('./controller');

const port = process.env.PORT || 3000;
app.get('/', controller.get)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
