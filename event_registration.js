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
//Global variable for the countdown timer (10 minutes = 600 seconds)
var timeRemaining = 600;

//To set interval to run every 1000 ms (1 second)
var countdownInterval = setInterval(function() {
	var minutes = Math.floor(timeRemaining / 60);
	var seconds = timeRemaining % 60;

	//Prepend a "0" if seconds are less than 10 
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	//Update the timer display on the webpage
	document.getElementById("timer").innerHTML = minutes + ";" + seconds;

	//To check if the time has run out
	if (timeRemaining <= 0) {
		clearInterval (countdown Interval);
		alert("Sorry, your time to complete the form has expired! Please try again if you still wish to purchase tickets."); [cite: 6]
		location.href = "event_registration.html"; //Redirects to restart
	}

	timeReminaing--; //Decreases time by 1 second
}, 1000);
