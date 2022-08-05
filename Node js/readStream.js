var fs =require("fs");
var rs =fs.createReadStream("newWrite.txt");
rs.on("open",function(){
console.log("The file has been Opened");
});
