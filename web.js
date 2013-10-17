var express = require("express");
var app = express();

//CORS middleware
// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// }

// app.use(allowCrossDomain);
app.use(express.logger());
app.use(express.static('public'));

var port = process.env.PORT || 5000;
// var apiURL = process.env.API_URL || null;


// app.get('/api_config', function(request, response) {
//   response.setHeader('Content-Type', 'application/json');
//   response.setHeader('Content-Type', 'application/json');
//   response.send({url: apiURL});



// });

app.listen(port, function() {
  console.log("Listening on " + port);
});