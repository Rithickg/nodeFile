var fs=require("fs");
fs.appendFile("appendfile.txt","This file is created using appendFile method",function(err){
if(err) throw err;
console.log("The file has been Created and saved !");
});