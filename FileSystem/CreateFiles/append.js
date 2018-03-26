var fs = require('fs');

fs.appendFile('createdByAppend.txt','Hello content',function(err){
    if(err) throw err;
    console.log("saved");
})