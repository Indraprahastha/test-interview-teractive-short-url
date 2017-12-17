var mongoose = require('mongoose');
let short_url = require('../models/short_url-model')

const identification = (req, res, next) => {
  short_url.find({originurl:req.body.originurl}).then((data)=>{
    if (data[0].originurl) {
      res.send(data)
    } else {
      next()
    }
  }).catch((err)=>{
    next()
  })
}

module.exports = {
  identification
};
