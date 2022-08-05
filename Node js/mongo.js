var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/new_DataBase";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created new_DataBase!");
  db.close();
console.log(err);
});
