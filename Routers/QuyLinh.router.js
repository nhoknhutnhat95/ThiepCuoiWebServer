var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('QuyLinh/index')
});
router.get('/v2', function(req, res, next) {
  res.render('QuyLinh/indexV2')
});
module.exports = router;
