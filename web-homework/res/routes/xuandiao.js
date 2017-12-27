var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/xuandiao', function (req, res, next) {
    var name = req.query.name,
        state = req.query.state,
        area = req.query.area,
        callback = req.query.callback;

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'webwork'
    });

    if(state){
        state="distribution";
    }
    else {
        state="no-distribution";
    }
    var result;
    connection.connect();
    var sq = 'insert into student (name,state,area) values (\''+name+'\',\''+state+'\',\''+area+'\')';
    var sq_d = 'delete from application where name=\''+name+'\'';

    connection.query(sq, function (err, rows) {

        if (err) {
            res.send(callback + "(" + "{" +
                "\"status\":\"1\",\n}" + ")");
            throw err;
        }

        else {
            res.send(callback+"("+"{"+
                "\"status\":\"1\",\n"+
                "\"url\":\"boss.html\""
                +"}"+")");

        }

    });

    connection.query(sq_d,function (err) {
       if(err){
           throw err;
       }
    });

    connection.end();
});

module.exports = router;