var MongoClient =require("mongodb").MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
 if (err) throw err;
var dbo= db.db("new_DataBase");
dbo.collection("customers").find().limit(4).toArray(function(err,result){
 if (err) throw err;
 console.log(JSON.stringify(result));
db.close();
});
});