var MongoClient =require("mongodb").MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
 if (err) throw err;
var dbo= db.db("new_DataBase");
var myquery ={name:/^R/}
var newquery ={$set: {name:"Rocky"}};
dbo.collection("customers").updateMany(myquery,newquery,function(err,res){
 if (err) throw err;
 console.log(res.result + "document updated");
db.close();
});
});