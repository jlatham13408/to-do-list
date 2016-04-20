var express = require('express'),
    logger = require('morgan')('dev'),
    server = express();

server.use(express.static(__dirname));
server.use(logger);

server.get('/', function(req, res){
  res.sendFile('/index.html', {root: __dirname});
});

server.listen(8080, function(){
  console.log('Now listening on port '+ 8080);
});
