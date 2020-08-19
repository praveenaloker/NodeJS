const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
var path= require('path');


var app = express();

app.use(bodyParser.json());

var connection = new mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'password',
    database:'user',
});

connection.connect((err)=>{
    if(!err)
    {
        //console.log(err);
        console.log("Connected !");
    }
    else
    {
        console.log(err);
        console.log("Connection Failed !");
    }
});
module.exports = connection;

// app.use(express.static(__dirname + '/public'));
// app.get("/", (req, res) => {
//   res.sendFile('UserRegistration.html',{ root: __dirname })
// });

//app.use('/',require('./routes/pages'));

//app.listen(3000);