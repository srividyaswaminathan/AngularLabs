var express = require('express');
var path = require('path');
var root = __dirname;
var app = express();


app.use(express.static(path.join(root, './client')));
app.use(express.static( path.join( root, './node_modules' )));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/index.html')
})

app.listen(6789, function(){
	console.log("Listening on port 6789");
})

