var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/message', function (req, res, next) {
    var name = req.query.name,
        tel = req.query.tel,
        email = req.query.email,
        mes = req.query.message,
        callback = req.query.callback;

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'webwork'
    });

    var result;
    connection.connect();
    var sq = 'insert into message (name,email,tel,message) values (\''+name+'\',\''+email+'\',\''+tel+'\',\''+mes+'\')';
    connection.query(sq, function (err, rows) {

        if (err) {
            res.send(callback + "(" + "{" +
                "\"status\":\"0\",\n}" + ")");
            throw err;
        }

        else {
            res.send(callback + "(" + "{" +
                "\"status\":\"1\",\n}" + ")");
        }

    });

    connection.end();
});

module.exports = router;