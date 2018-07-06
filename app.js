var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

var currentSearchResult = 'example';
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});


app.post('/submit', urlencodedParser, function (req, res) {
    console.log(req.body);
})


// fs.readFile('./json/json.json', function (err, data) {
//     var json = JSON.parse(data)
//     json.push('search result: ' + currentSearchResult)

//     fs.writeFile("./json/json.json", JSON.stringify(json))
// })