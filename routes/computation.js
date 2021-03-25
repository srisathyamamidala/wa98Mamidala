var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let someNumber=Math.floor(Math.random()*100)
  res.render('compute', { result:'log applied to '+someNumber+' is '+Math.log(someNumber)});
});

module.exports = router;
