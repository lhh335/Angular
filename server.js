var express = require('express');
var app = express();
app.use(express.static(__dirname+'/pages'));
app.get('/',function(req,res){
    res.sendfile(__dirname+'/pages/index.html');
})

app.listen(1000);

