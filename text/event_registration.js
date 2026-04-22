/*
		Your Name: Jae Mi Cracolici
		Last Modified Date: 04/21/2026
		File: event_registration.js
		File Description: This JavaScript file manages the alumni event registration system. It includes a 10-minute countdown timer, ticket cost calculation logic, and form validation to ensure all required user data is provided.
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/
//Countdown timer
vartimeRemaining = 600; //Sets time limit to 10 minutes (600 seconds)

var countdownInterval = setInterval(function() {
	var minutes = Math.floor(timeRemaining / 60);
	var seconds = timeRemaining % 60;

//Prepend a "0" if the seconds are less than 10
if (seconds < 10) {
	seconds = "0" + seconds;
}

var timerDisplay = document.getElementById("timer");
	if (timerDisplay) {
		timerDisplay.innerHTML = minutes + ":" + seconds;
	}

//Checks if the time has run out 
if (timeRemaining <= 0) {
	clearInterval(countdownInterval); //Stops the timer 
	alert("Sorry, your time to complete the form has expired! Please try again if you still wish to purchase tickets."); [cite: 6]
	location.href = "event_registration.html"; //To redirect back to the same page 
}

timeRemaining--; //Decreases by 1 second at each interval
}, 1000); 
