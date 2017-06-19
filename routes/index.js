var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('game', { title: 'Game' })
})

router.get('/game', function (req, res) {
  res.render('game', {title: 'Game'})
})

module.exports = router
