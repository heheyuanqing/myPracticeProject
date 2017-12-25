var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  var name = req.query.name,
      psw = req.query.psw,
      callback = req.query.callback;

  var usr = {name:"18859922442",psw:"123456"};

  if (usr.name === name&&usr.psw === psw){
    res.send(callback+"("+"{"+
        "\"status\":\"1\",\n"+
        "\"url\":\"success.html\""
        +"}"+")")
  }
  else{
    res.send(callback+"("+"{"+
        "\"status\":\"0\",\n"+
        "\"url\":\"null\""
        +"}"+")")
  }
});

module.exports = router;
