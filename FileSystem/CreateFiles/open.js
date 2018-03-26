var fs = require('fs');

fs.open('createdByOpen.txt','w',function(err,file){
    if(err) throw err;
    console.log("fs open Saved");
});