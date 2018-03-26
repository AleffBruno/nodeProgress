var http = require('http');
var date = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("currently date is "+date.myDateTime());
    res.end('Hello World!');
}).listen(8080);


