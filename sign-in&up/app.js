var express = require("express");
var app = express();

app.use(express.static('public'));

app.get("/view/index",function (req,res) {
    res.sendFile(__dirname,'/index.html');
});
app.get("/view/sign in",function(req,res){
    res.sendFile(__dirname+'/sign-in.html');
});
app.get("/view/sign up",function (req,res) {
    res.sendFile(__dirname,'/sign-up.html');
});

app.listen(3000);