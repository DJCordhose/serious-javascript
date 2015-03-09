var Hapi = require('hapi');
var Good = require('good');
var Path = require('path');

var server = new Hapi.Server();
server.connection({port: 8080});

server.views({
    engines: {
        hbs: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views',
    partialsPath: './views/partials'
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        var greeting = request.query.greeting !== undefined ? request.query.greeting : 'Hello';
        reply.view('index', { greeting: greeting });
    }
});

server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            args: [{log: '*', response: '*'}]
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
