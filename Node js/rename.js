var fs=require("fs");
fs.rename("OldName.txt","NewName.html",function(err){
if (err) throw err;
console.log("File Renamed !");
});