var express = require('express');
var router = express.Router();

/*
  POST getRecord.

  Accepts a JSON object in the format:
  {
    "key": "chp8vgSkJDbyDKAS"
  }

  Returns a JSON object in the format:
  {
    "key" : "chp8vgSkJDbyDKAS",
    "value" : "9sScg6DaMLbMTgLdPADPYJTyOd6AgHDs9SZNkgGTlHeQF",
    "createdAt" : "2016-01-26"
  }
 */
router.post('/getRecord', function(req, res, next) {
  res.send('respond with a meaningful object.');
});

module.exports = router;
