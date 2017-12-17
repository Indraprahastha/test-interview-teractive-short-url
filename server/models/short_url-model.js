const mongoose = require('mongoose')

//----------------------------------------------------------
const schema = new mongoose.Schema({
  originurl:'string',
  shorturl:'string',
})

const shorturl = mongoose.model('shorturl', schema)
//----------------------------------------------------------
module.exports = shorturl
