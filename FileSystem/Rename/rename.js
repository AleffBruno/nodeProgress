var fs = require('fs');

fs.rename('renamethis.txt','renamed.txt',function(err){
    if(err) throw err;
    console.log("renamed");
});