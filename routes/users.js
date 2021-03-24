var express = require('express');
var router = express.Router();
var sat=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  sat = sat+1;
  res.send('User accesses are:' + sat);
});

module.exports = router;
