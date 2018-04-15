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

	function findNewFriend(user)
	{
		var surveyScores = user.scores;

		var responseDiff = 100;
		var closestFriend;

		for (i = 0; i < friends.length; i++)
		{
			var responseScores = friends[i].scores;
			var totalDiff = 0;

			for (j = 0; j < responseScores.length; j++)
			{
				totalDiff = totalDiff + Math.abs(surveyScores[j] - responseScores[j]);
			}
			if (totalDiff <= responseDiff)
			{
				closestFriend = friends[i];
				responseDiff = totalDiff;
			}
		}
		return closestFriend;
	}
	//API POST request
	app.post("/api/friends", function(req, res)
		{
			var currentUser = req.body;
			var newFriend = findNewFriend(currentUser);
			res.json(newFriend);
			friends.push(currentUser);
		});
	//Clear out the data in friends array
	app.post("/api/clear", function()
		{
			friends = [];

		});
};