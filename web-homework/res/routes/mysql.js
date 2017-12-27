var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'webwork'
});

connection.connect();

connection.query('SELECT * from student',function (err,rows) {
    if (err){
        throw err;
    }

    console.log(rows.length);
});

connection.end();