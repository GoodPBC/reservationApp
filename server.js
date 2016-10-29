/**
 * Created by juanitasoranno on 10/29/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;


app.get('/', function (req, res){
    app.send("This is loaded.");
})

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});