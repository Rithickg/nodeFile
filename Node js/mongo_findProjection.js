var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("new_DataBase");
  dbo.collection("customers").find({},{projection:{name:1,address:1 ,_id:0}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[7].name);
    console.log(result[0].address);
    db.close();
  });
});