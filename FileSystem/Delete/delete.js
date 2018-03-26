var fs = require('fs');

fs.unlink('deletedByUnlink.txt',function(err){
    if(err) throw err;
    console.log("deleted by unlink");
});