// dependencies
var express = require('express');
var bodyParser = require('body-parser');

// create server with express
var app = express();

// set up port
var PORT = process.env.PORT || 3000;

// set up middleware (bodyParser)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// turn on server
app.listen(PORT, function() {
  console.log("you are now listening on port: " + PORT);
});