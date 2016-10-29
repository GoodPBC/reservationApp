/**
 * Created by juanitasoranno on 10/29/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('public'));

app.get('/', function (req, res){
    app.send("This is loaded.");
});

app.get('/view', function(req, res){
    res.sendFile(path.join(__dirname, '/public', 'view.html'));
    console.log('sent');
});

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});