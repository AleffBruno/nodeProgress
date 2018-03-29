var mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user : 'root',
    password: '',
    database : 'l2'
});

con.connect(function(err){
    con.query("select * from languages",function(err,result){
        if (err) throw err;
        console.log(result);
    })
    
    console.log("Connected!");
});