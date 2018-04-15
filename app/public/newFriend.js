//on the button click, capture user's survey answers
		$("#submit").on("click", function(event)
			{
				event.preventDefault();

				//assign form input to a variable
				var newFriend = 
				{
					name: $("#name").val().trim(),
					photo: $("#photo").val().trim(),
					scores: [
								$("#q1").val().trim(),
								$("#q2").val().trim(),
								$("#q3").val().trim(),
								$("#q4").val().trim(),
								$("#q5").val().trim(),
								$("#q6").val().trim(),
								$("#q7").val().trim(),
								$("#q8").val().trim(),
								$("#q9").val().trim(),
								$("#q10").val().trim()
							]
							
				};

				//post the new data so that it will present with the other objects in the friends.js file
				$.post("/api/friends", newFriend);


				
				//call the function which will compare the new object to the other objects in friends.js
				// friendComp();

			});
		//assign global variables which can be easily accessed to aid in the friend comp process
		
		// tempArray will hold the friends.js object for iteration & comparison with new friend object
		var tempArray = [];

		//comp initializes a variable to hold the sum of the absolute value of the differences between each element of new friend and objects in the friend array
		var comp = 0;

		//closestFriend will hold the friend that has the smallest sum difference in the survey answer arrays
		var closestFriend = "";

		//variable which will hold the smallest difference in the answer comps
		var arrayDiff = 0;
		

		// var count = 0;

		function friendComp()
		{
			var currentURL = window.location.origin;

			$.ajax({url: currentURL + "/api/friends", method: "GET"})
			.then(function ()
			{
				function loopFriends(n, action)
				{
					console.log("ping:253");
					// function repeat(n, action)
				        // {
				            for (i=0; i<n; i++)
				                {
				                    console.log("inner loop: " + i);
				                    action(i);

				                }
				        // }

        			loopFriends(10, console.log);
        	}
					//initialize the variable which will hold the closest friend based on comp
					
					//initialize a variable to hold the calculate difference between the new friend and current friends objects

					//initialize a variable which will hold the lowest scored difference between the new friend and the current friend; will help determine the closest friend.
					// var scoreDiff = 100;

					// console.log("friends.length: " + friends.length);
					// //set a variable to hold the most recent friend addition to the array
					// // var lastIn = friends.length-1;

					// for (i=0; i<10; i++)
					// {
					// 	action(i);
					// }

					// loopFriends(friends.length, holdScores());

					// function holdScores()
					// {
					// 	//assign the current friends scores to a temp array for comparison
					// 	tempArray = friends[count].scores;
					// 	console.log("holdScores-tempArray: " + tempArray);


					// 	//compare the scores of the current friend to the scores of the new friend
						// for (i=0; i<friends.length; i++)
						// {
							
							// comp = Math.abs(tempArray.scores[i] - friends[lastIn].scores[i]);
							// console.log("comp: " + comp);
							
							// //calculate and save the total array difference at each iteration through the scores arrays
							// arrayDiff = arrayDiff+comp;
							// console.log("arrayDiff: " + arrayDiff);
							
							// //compare arrayDiff with scoreDiff, the lower score is assigned to scoreDiff
							// if (arrayDiff<scoreDiff)
							// {
							// 	scoreDiff = arrayDiff;

								//assign closestFriend based on the scoreDiff between current and new friend
								// closestFriend = friends[count].name;
								// console.log("closest friend: " + closestFriend);
								
							// }

							
						// }

						//call the compScores function to iterate to the next friend for comparison to the new friend
						// compScores();
					// }

					//this function will determine if more friends need to be compared to the new friend and when to know there are no more friends to compare with
					// function compScores()
					// {
						
					// 	if(count<friends.length)
					// 		{
					// 			count++;
					// 			holdScores();
					// 		}

					// }

					//once the comparison is complete, post the message announcing the closest friend

					// alert("Your closest match is: " + closestFriend);

				});

			console.log("ping:336");
			
		}

		friendComp();
		
		console.log("ping:340");

		