const short_url = require('../models/short_url-model')
const mongoose = require('mongoose');
//------------------------------------------------------
const encodedurl = (req,res) => {
  let domain = req.body.originurl
  let pecah = domain.split(/[/.]/)
  let alphabet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  let save = []
  let count = 0
  while(count<pecah.length){
    save.push(alphabet[Math.floor(Math.random()*58)])
    count++
  }

  short_url.create({
    originurl:req.body.originurl,
    shorturl: save.join('')
  }).then((data)=>{
    res.send([data])
  }).catch((err)=>{
    res.send(err)
  })
}
//------------------------------------------------------
const decodedurl = (req,res) => {
  short_url.find({shorturl:req.headers.shorturl}).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}
//------------------------------------------------------
module.exports = {
  encodedurl,
  decodedurl,
}
