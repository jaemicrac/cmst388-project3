/*
		Your Name: Jae Mi Cracolici
		Last Modified Date: 04/21/2026
		File: event_registration.js
		File Description: This JavaScript file acts as the functional engine for the event registration system, managing all interactive logic and DOM manipulation without requiring any modifications to the provided HTML or CSS files. Its primary purpose is to execute a ten-minute countdown timer that automatically redirects the user upon expiration, while simultaneously performing real-time cost calculations and validating that ticket quantities fall between the required range of one and three. The script provides essential user feedback by dynamically showing or hiding the contact information section and utilizing visual cues, such as background color changes and error messages, to ensure all required data is entered correctly before finalizing the purchase.
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/
//Countdown timer
var timeLimit = 10 * 60;
var timerDisplay = document.getElementById("timer");

var countdown = setInterval(function() {
	var minutes = Math.floor(timeLimit / 60);
	var seconds = timeLimit % 60;

	if (seconds < 10) {
		seconds = "0" +seconds;
	}

	// To update time remaining on the screen 
	timerDisplay.innerHTML = minutes + ";" + seconds;

	// For when the timer runs out 
	if (timeLimit <= 0) {
		clearInterval(countdown); 
		alert("Sorry, your time to complete the form has expired! Please try again if you still wish to purchase tickets."); [cite: 6]
		location.href = "event_registration.html"; // To redirect back to same page
	}

		timeLimit--;
}, 1000);
	

	
