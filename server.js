var express = require("express");
var bodyParser = require("body-parser");

//indicate to node that we are making an express server
var app = express();

//set up an initial port
var PORT = process.env.PORT || 8080;

//set up an express app to handle data parsing

//put this before the body-parser - this is what will allow access to html, css, images, etc.
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Router: lays out routes which direct the server's response to visitor requests
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRouters")(app);

//Listener: starts the servers and verifies with a message
app.listen(PORT, function()
{
	console.log("App listening on port: ", PORT);
});