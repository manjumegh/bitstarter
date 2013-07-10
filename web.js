var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

function get_data_from_index_file(file) {
  var bindata = fs.readFileSync(file);
  return new Buffer(bindata).toString();
}
app.get('/', function(request, response) {
  var file = 'index.html';
  var data = get_data_from_index_file(file);
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
