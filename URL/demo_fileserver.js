var url = require('url');

var adr = "http://localhost:8080/default.htm?year=2017&month=february&day=one";

var q = url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.href);

var qdata = q.query;
//gets the value on queryString param
console.log(qdata.year);