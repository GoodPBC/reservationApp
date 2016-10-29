// The url library allows us to parse parts of the request url.
var url = require("url");

// Lets require/import the HTTP module
var http = require("http");

// Require HTML files
var fs = require('fs');

// Lets define a port we want to listen to
var PORT = 3000;

var server = http.createServer(handleRequest);

// Lets start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

// We need a function which handles requests and send response
function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {
    case "/":
      displayIndex(urlParts.pathname, req, res);
      break;
    case "/makereservation":
      displayMakeReservation(urlParts.pathname, req, res);
      break;
    case "/view":
      displayView(urlParts.pathname, req, res);
      break;
    default:
      display404(urlParts.pathname, req, res);
  }
}

// When we visit the "http://localhost:8080/" path, this function is run.
function displayIndex(url, req, res) {
  // console.log("hih")
  var myHTML = fs.readFile("index.html", "utf8", function(error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(data);
  })
}

// When we visit the "http://localhost:8080/" path, this function is run.
function displayMakeReservation(url, req, res) {
  // console.log("hih")
  var myHTML = fs.readFile("makereservation.html", "utf8", function(error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(data);
  })
}

// When we visit the "http://localhost:8080/" path, this function is run.
function displayView(url, req, res) {
  // console.log("hih")
  var myHTML = fs.readFile("view.html", "utf8", function(error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(data);
  })
}


// When we visit any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}
