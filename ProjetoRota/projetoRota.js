const http = require('http');
var url = require('url');
var callback = function (request, response) {

    response.writeHead(200, { "Content-type": "text/plain" });

    var parts = url.parse(request.url);

    if (parts.path == "/") {
        response.end("site principal e Rota 1");
    } else if (parts.path == "/rota2") {
        response.end("site da Rota 2 ")
    } else if (parts.path == "/rota3") {
        response.end("site da Rota 3 ")
    } else {
        response.end("Rota invalida: " + parts.path);
    }
};

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000/");