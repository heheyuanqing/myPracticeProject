var express = require('express');
var app = express.Router();

app.get('/', function (req, res, next) {
    var name = req.query.name;
    var psw = req.query.psw;
    var callback = req.query.callback;

    var user = {
        name: 'hhyq',
        psw: '123456'
    };

    if (name === user.name && psw === user.psw){
        res.send(callback+"("+"{"+
            "\"status\":\"200\",\n"+
            "\"url\":\"http://localhost:63342/code/myPracticeProject/login/req/view/success.html?_ijt=93viugh0ud4okh6uim2k1ta1ui\""
            +"}"+")");
    }
        });

module.exports = app;