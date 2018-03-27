var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function(req,res){
    if(req.url == "/fileupload" && req.method.toLowerCase() == "post"){
        var form = new formidable.IncomingForm();
        //form.keepExtensions = true;
        form.parse(req,function(err,fields,files){
            if(err) throw err;
            var oldPath = files.filetoupload.path;
            //console.log("VELHO>>"+files.filetoupload.path);
            var newPath = "./FilesRecived/"+files.filetoupload.name; 
            fs.rename(oldPath,newPath,function(err){
                if (err) throw err;
                res.write("file updated ad moved");
                res.end();
            });
            
        });
    }else{
        res.writeHead(200,{'Content-type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8000);


