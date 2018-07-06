var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var jsonObj ={
    "name":""
};



function click() {
    fs.readFile('./json.json', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); //now it an object
            obj.push(jsonObj); //add some data
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('json.json', json); // write it back 
        }
    });
}
