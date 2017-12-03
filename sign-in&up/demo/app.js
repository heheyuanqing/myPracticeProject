var express = require('express');
var app = express();

app.use('/',function (req,res) {
    res.sendFile('public/main.html',{root:__dirname});
    console.log("main page is required");
});

app.post('/login',function (req,res) {
    name = req.body.name;
    psw = req.body.psw;
    console.log(name + "-----" +psw);
    res.status(200).send("注册成功！");
});
var server = app.listen(3000);