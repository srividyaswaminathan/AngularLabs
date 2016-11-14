var express = require('express'),
	path = require('path'),
	root = __dirname,
	app = express();

app.use(express.static(path.join(root, './static/client')));
app.use(express.static( path.join( root, './node_modules' )));

app.get('/', function(req, res){
	res.sendFile(root + 'index.html')
})

app.listen(6789, function(){
	console.log("listening on server 6789");
})	
