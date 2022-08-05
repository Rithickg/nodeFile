var MongoClient =require("mongodb").MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
 if (err) throw err;
var dbo= db.db("new_DataBase");
var myquery ={name: "John",address: "Highway 71"}
var newquery ={$set: {name:"NewJohn" ,address:"NewHighway 711"}};
dbo.collection("customers").updateOne(myquery,newquery,function(err,res){
 if (err) throw err;
 console.log("one document updated");
db.close();
});
});