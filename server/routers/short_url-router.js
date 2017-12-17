let express = require('express')
let router = express.Router()
let short_url = require('../controllers/short_url-controllers')
const identification = require('../helpers/identification')

router.post('/', identification.identification, short_url.encodedurl)
router.get('/', short_url.decodedurl)

module.exports = router
