var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
})

router.use('/QuyLinh', require('./QuyLinh.router'))

module.exports = router;
