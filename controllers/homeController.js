var express = require('express'),
  router = express.Router()

router.get('/', function (req, res) {
  console.log('serving home')
  res.render('home')
});

module.exports = router;
