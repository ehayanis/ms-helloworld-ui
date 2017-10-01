//Add required modules here
var express = require('express');
var request = require('request');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!')
});

app.get('/api', function(req, res) {
  request.get(
    { url: "http://localhost:8080/api/"},
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body)
      } else {
        res.send({"Error": "Looks like you are not calling the right API"})
      }
    }
  );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
