// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(500, {"Content-Type": "text/plain"});
  response.end("Hello Dockerizing Jenkin Pipeline\n");
});

// listen on localhost:8001
server.listen(8001);
console.log("Server listening at http://127.0.0.1:8001/");
