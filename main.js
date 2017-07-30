/*
--------Functions----------
*/

//converts dollars to cents 
function convertDollarsToCents(dollarAmount) {
	centAmount = (dollarAmount * 100);
	return centAmount;
}

//converts cents to dollars
function convertCentsToDollars(centAmount) {
	dollarAmount = (centAmount / 100);
	return dollarAmount;
}

/*
gets the whole count for a given value and denomination combination 
	param denomincation = denomincation found in the value and wallet objects
	param inputAmountCents = starting amount in cents (e.g. 100 = $1.00) 
*/
function getDenominationCount(denomination, inputAmountCents) {
var countAsCents = inputAmountCents / value[denomination];
var count = Math.floor(countAsCents);
wallet[denomination] = count;
value.running = inputAmountCents - (count * value[denomination]);
}

//gets the count of all types for a given amount 
function getTotalChange(inputAmountCents) {
	getDenominationCount("hundred", inputAmountCents);
	getDenominationCount("twenty", value.running);
	getDenominationCount("ten", value.running);
	getDenominationCount("five", value.running);
	getDenominationCount("one", value.running);
	getDenominationCount("quarter", value.running);
	getDenominationCount("dime", value.running);
	getDenominationCount("nickel", value.running);
	getDenominationCount("penny", value.running);
}

//Calculates and outputs the count of all types for a user provied amount
function changeCalculator(){
var userAmountDollars = prompt("How much money you got?")
var userAmountCents = convertDollarsToCents(userAmountDollars);
getTotalChange(userAmountCents);
alert("You have " 
	+wallet.hundred+ " hundreds, " 
	+wallet.twenty+ " twenties, " 
	+wallet.ten+ " tens, "
	+wallet.five+ " fives, " 
	+wallet.one+ " ones, "
	+wallet.quarter+ " quarters, " 
	+wallet.dime+ " dimes, " 
	+wallet.nickel+ " nickels, and " 
	+wallet.penny+ " pennies!!")
}

/*
--------Variables----------
*/

// object holds the value of each coin type and the running value used in the getTotalCoins function
var value = {
		hundred: 10000,
		fifty: 5000,
		twenty: 2000,
		ten: 10000,
		five: 500,
		one: 100,
		quarter: 25,
	    dime: 10,
	    nickel: 5,
	    penny: 1,
	    running: 0
}

var wallet = {
		hundred: 0,
		fifty: 0,
		twenty: 0,
		ten: 0,
		five: 0,
		quarter: 0,
	    dime: 0,
	    nickel: 0,
	    penny: 0
}

/*
--------Workspace----------
*/

changeCalculator();

