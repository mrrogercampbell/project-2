const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const appController = require('./controllers/appControllers')

// Where am I going to direct this?
app.use('/api/bookmarks/', bookmarksController)
app.use('./routes/appRoutes', bookmarksController)

app.listen(8080, () => console.log('They see me rollin...on port 8080...'))