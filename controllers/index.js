var express = require('express')
  , router = express.Router()

router.use('/home',require('./homeController'))
router.use('/recipe',require('./recipeController'))

module.exports = router
