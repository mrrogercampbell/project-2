const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const routes = require('./routes/appRoutes')

// Where am I going to direct this?
app.use('/', routes)


app.listen(8080, () => console.log('We in this ish...on port 8080...'))