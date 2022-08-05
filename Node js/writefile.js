var fs=require("fs");
fs.writeFile("newWrite.txt",
"hjfkffyulhfgly",function(err){
if (err)throw err;
console.log("WriteFile method");
});