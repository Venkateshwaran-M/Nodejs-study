// Load the http module to create the http server
var http = require('http');

// configure our http erver to respnd with hello world to all requests.
var server = http.createServer(function (request, response) {
    console.log(request.url);
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello world\n');
});
var port = 8000;
// Listen on port 8000, IP defaults to 127.0.0.1

server.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);

    }
});
// put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:8000/');

///node hello_Http.js























































































































