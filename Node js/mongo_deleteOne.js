var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("new_DataBase");
var myquery={name:"Chuck"};
  dbo.collection("customers").deleteOne(myquery,function(err,result) {
    if (err) throw err;
 console.log("1 document deleted");
    console.log(result);
    db.close();
  });
});