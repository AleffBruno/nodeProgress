var fs = require('fs');

fs.writeFile('updatedByWriteFile.txt','2Content',function(err){
    if(err) throw err;
    console.log("updated by WriteFile");
})