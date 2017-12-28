var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/logup', function(req, res, next) {
    var name = req.query.name,
        psw = req.query.psw,
        callback = req.query.callback;

    console.log(name);

    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'webwork'
    });

    connection.connect();

    var sq = 'insert into user (name,psw) values (\''+name+'\',\''+psw+'\')';
    connection.query(sq,function (err) {
        if (err){
            res.send(callback+"("+"{"+
                "\"status\":\"0\",\n"+
                "\"url\":\"null\""
                +"}"+")");
            throw err;
        }

        else{
            res.send(callback+"("+"{"+
                "\"status\":\"1\",\n"+
                "\"url\":\"singn-in.html\""
                +"}"+")");
        }

    });

    connection.end();


});

module.exports = router;
