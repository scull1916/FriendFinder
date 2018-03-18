//LOAD data from stored in the friends.js file
var friends = require("../data/friends");

//Routing
module.exports = function(app)
{
	//API GET request
	app.get("/api/friends", function(req, res)
		{
			res.json(friends);
		});
}