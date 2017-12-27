var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/appli', function (req, res, next) {
    var name = req.query.name,
        tel = req.query.tel,
        vol = req.query.vol,
        resu = req.query.due,
        callback = req.query.callback;

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'webwork'
    });

    var result;
    connection.connect();

    if (callback === "pass") {

        connection.query('select * from application', function (err, rows) {
            var result;
            if (err) {
                res.send(callback + "(" + "{" +
                    "\"status\":\"0\",\n\"infor\":\"null\"})");
                throw err;
            }
            else {
                for (var i = 0; i < rows.length; i++) {
                    if (!result) {
                        result = "{\"name\":\"" + rows[i].name + "\",\n" + "\"volu\":\"" + rows[i].volu + "\",\n" + "\"resu\":\"" + rows[i].resu + "\"}";
                        if (i !== rows.length - 1) {
                            result += ",";
                        }
                    }
                    else {

                        result += "{\"name\":\"" + rows[i].name + "\",\n" + "\"volu\":\"" + rows[i].volu + "\",\n" + "\"resu\":\"" + rows[i].resu + "\"}";
                        if (i !== rows.length - 1) {
                            result += ",";
                        }
                    }
                }
                result = callback + "({\"status\":\"1\",\n\"infor\":[" + result + "]})";
                res.send(result);
            }

        });
    }
    else {
        var sq = 'insert into application (name,tel,volu,resu) values (\'' + name + '\',\'' + tel + '\',\'' + vol + '\',\'' + resu + '\')';
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
    }


    connection.end();
});

module.exports = router;