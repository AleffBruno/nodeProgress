var fs = require('fs');

fs.writeFile('createdByWriteFile.txt','Hello Content',function(err){
    if(err) throw err;
    console.log("saved by WriteFile");
});