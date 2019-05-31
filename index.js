const express = require('express')
const app = express()

const controller = require('./controller');

console.log(process.env.NODE_ENV, process.env);
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000
app.get('/', controller.get)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
