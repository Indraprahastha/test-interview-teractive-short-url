const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const mongoose = require('mongoose')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))

var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://Indraprahastha:Pancasila85@ds119355.mlab.com:19355/tester-database';
mongoose.connect(uri);

let short_url = require('./routers/short_url-router.js')

app.use('/short_url',short_url)

app.listen(process.env.PORT || 3005, function(){
})
