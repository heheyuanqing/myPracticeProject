var express = require("express");
var app = express();

app.get('../view/sign-up.html',function (req,res) {
    var postData = "";
    req.addListener("data",function (postDataChunk) {
        postData +=postDataChunk;
    });
    req.addListener("end",function () {
        console.log(postData);
    });
});
