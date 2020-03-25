const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const option = { useUnifiedTopology: true, useNewUrlParser: true };
require("dotenv").config();

MongoClient.connect(url, option, (err, db) => {
  if (err) throw err;

  let dbo = db.db(process.env.DB_NAME);

  dbo.collection("users").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted users");
    db.close();
  });

  var myobj = { email: "root@root.com", password: "root" };

  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
