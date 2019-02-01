const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
// const bootstrap = require('bootstrap')

app.use(methodOverride('_method'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))



app.set('view engine', 'hbs')

const routes = require('./routes/appRoutes')

// Where am I going to direct this?
app.use('/', routes)


app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => console.log(`server is running on PORT ${app.get('port')}`))
// app.listen(8080, () => console.log('We in this ish...on port 8080...'))