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
var timeRemaining = 600; //Sets time limit to 10 minutes (600 seconds)

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
	alert("Sorry, your time to complete the form has expired! Please try again if you still wish to purchase tickets."); 
	location.href = "event_registration.html"; //To redirect back to the same page 
}

timeRemaining--; //Decreases by 1 second at each interval
}, 1000); 

//To calculate total number of tickets 
function calculateTotal() {
	var numTicketsField = document.getElementById("numTickets");
	var numTickets = numTicketsField.value;
	var errorSpan = document.getElementById("msgTickets");
	var contactSection = document.getElementById("contactInformation");
	var totalCostField = document.getElementById("totalCost");

//Validates and checks if input is a number or outside of the 1-3 range
if (isNaN(numTickets) || numTickets < minTickets || numTickets > maxTickets || numTickets === "") {
	//Shows an error message and turns the field to yellow
	errorSpan.innerHTML = "You can only buy between 1 and 3 tickets."; 
	numTicketsField.style.backgroundColor = "yellow";
	contactSection.style.display = "none"; //To keep contact information hidden
	totalCostField.value = "$0.00";
} else {
	errorSpan.innerHTML = "";
	numTicketsField.style.backgroundColor = "white";

//Calculation for tickets * ticket price + surcharge
var total = (parseInt(numTickets) * costPerTicket) + ticketSurcharge;

//Format to fixed 2 decimal places with $
totalCostField.value = "$" + total.toFixed(2); 

//Reveal the contact section 
contactSection.style.display = "block";
}
}

//Complete purchase function
function completePurchase() {
	var nameField = document.getElementById("name");
	var emailField = document.getElementById("email");
	var nameError = document.getElementById("msgname");
	var emailError = document.getElementById("msgemail");
	var isValid = true;

	//Email Regex to match format xxx@yyy.domain
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	//Validate name is not blank
	if (nameField.value.trim() === "" {
		nameError.innerHTML = "Please enter your name.";
		nameField.style.backgroundColor = "yellow";
		isValid = false;
	} else {
		nameError.innerHTML = "";
		nameField.style.backgroundColor = "white";
	}

	//Validate email format 
	if (!emailPattern.test(emailField.value)) {
		emailError.innerHTML = "Please enter a valid email (xxx@yyy.domain).";
		emailField.style.backgroundColor = "yellow";
		isValid = false;
	} else {
		emailError.innerHTML = "";
		emailField.style.backgroundColor = "white";
	}

	if (isValid) {
		clearInterval(countdownInterval); //Stops timer 
		var total = document.getElementById("totalCost").value;
		alert("Thank you for your purchase! Your total cost is " + total);
	}
}
