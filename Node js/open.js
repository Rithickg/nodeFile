var fs=require("fs");
fs.open("newOpen.txt","w",function(err,file){
if (err) throw err;
console.log("The file is opened using Open methos");
});