var http = require('http');

var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello World! you where responded by: " + process.env.HOSTNAME);
}

var www = http.createServer(handleRequest);
www.listen(8080);
