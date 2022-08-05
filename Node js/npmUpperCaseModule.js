var http=require("http");
var uc =require("upper-case");
http.createServer(function(req,res){
res.writeHead(200,{"Content-Type":"text/html"});
res.write(uc.upperCase("hello this is upper case npm module package !"));
res.end();
}).listen(2002);