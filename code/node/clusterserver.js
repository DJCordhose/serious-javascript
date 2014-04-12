/**
 * Created by olli on 10/04/14.
 */
var cluster = require("cluster");
var http = require("http");
var numCPUs = require("os").cpus().length;
var port = parseInt(process.argv[2]);

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", function(worker, code, signal) {
        cluster.fork();
    });
} else {
    http.createServer(function(request, response) {
        console.log("Request for:  " + request.url);
        response.writeHead(200);
        response.end("hello world\n");
    }).listen(port);
}