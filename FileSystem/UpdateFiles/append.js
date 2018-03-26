var fs = require('fs');

fs.appendFile('updatedByAppend.txt',' at Final',function(err){
    if (err) throw err;
    console.log("file updated");
})