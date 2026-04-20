/*
		Your Name: Jae Mi Cracolici
		Last Modified Date: 04/21/2026
		File: event_registration.js
		File Description: <Enter a brief paragraph to describe the purpose of this file>
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
