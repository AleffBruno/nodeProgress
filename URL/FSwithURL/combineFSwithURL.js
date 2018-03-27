var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var filename = "."+q.pathname;
    if(filename == "./") // myImprove
    {
        return res.end("NAO E DIRETORIO");
    }
    fs.readFile(filename,function(err,data){
        if(err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end("End Example");
    })
}).listen(8000);