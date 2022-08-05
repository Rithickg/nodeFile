var mysql=require("mysql");

var con=mysql.createConnection({
  host:"localhost",
user:"RITHICK",
password:""
});

con.connect(function(err){
if(err) throw err;
console.log("Connected !");
});