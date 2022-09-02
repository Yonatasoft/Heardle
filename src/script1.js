var mongodb = require("mongodb");
var fs = require('fs');
var path = require('path');

var client = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";
var DB_NAME = "yonata-local";
var OUTPUT_DIR = "output-directory";

client.connect(url, function (err, client) {
    
    var db = client.db("yonata-local");
    var collection = db.collection("users");
    
    var query = {};
    var obj = {
        table: []
    };
    var cursor = collection.find(query);
    cursor.forEach(
        function(doc) {
            //obj.table.push(doc);
            console.log(JSON.stringify(obj));
            fs.writeFileSync('users.json', JSON.stringify(doc));
            console.log("ok");
        }, 
        function(err) {
            client.close();
        }
    );
});
