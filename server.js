const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.json');

const app = express();

app.use(bodyParser.json());

var distDir = __dirname + "/dir/";

app.use(express.static(distDir));

var server = app.listen(process.env.PORT || 3000, function (){
    var port =  server.address().port;
    console.log("Server running in port ", port);
});

app.get("/api/status", function (req, res) {
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(db));
});