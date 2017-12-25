var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'webwork'
});

connection.connect();

var select = 'SELECT * from user';
connection.query(select,function (err,res) {
    if(err){
        console.log(err.message);
    }
    else{
        console.log(res);
    }
});