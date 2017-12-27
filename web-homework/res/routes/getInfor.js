var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/result', function (req, res, next) {
    var name = req.query.name;
    var callback = req.query.callback;

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'webwork'
    });

    var result;
    connection.connect();

    connection.query('SELECT * from student', function (err, rows) {
        var infor = [];

        if (err) {
            throw err;
        }

        for (var i = 0; i < rows.length; i++) {
            infor.push({name: rows[i].name, state: rows[i].state, area: rows[i].area});
        }

        for (i = 0; i < rows.length; i++) {
            if (name === rows[i].name) {
                result = callback + "(" + "{" +
                    "\"status\":\"1\",\n" +
                    "\"name\":\"" + infor[i].name + "\",\n" +
                    "\"state\":\"" + infor[i].state + "\",\n" +
                    "\"area\":\"" + infor[i].area + "\"\n"
                    + "}" + ")";
           break;
            }

        }
       if (result){
           res.send(result);
       }
       else {
            res.send(callback + "(" + "{" +
                "\"status\":\"0\",\n" +
                "\"name\":\"" + infor[i].name + "\"\n" +
                "\"state\":\"" + infor[i].state + "\"\n" +
                "\"area\":\"" + infor[i].area + "\"\n"
                + "}" + ")");
       }

    });

    connection.end();
});

module.exports = router;