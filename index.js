const express = require('express')
const app = express()

const controller = require('./controller');
const config = require('./config');

const port = config.hostPort;
app.get('/', controller.get)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
