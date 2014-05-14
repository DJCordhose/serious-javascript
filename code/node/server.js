var http = require('http');

function handleRequest (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}
http.createServer(handleRequest).listen(1337);

console.log('Server running at http://127.0.0.1:1337/');