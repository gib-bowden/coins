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
gets the whole coin count for a given value and coin combination 
	param coin = coin name found in the centValue and coinPurse objects
	param inputAmount = starting amount in cents (e.g. 100 = $1.00) 
*/
function getCoinCount(coin, inputAmountCents) {
var countAsCents = inputAmountCents / centValue[coin];
var coinCount = Math.floor(countAsCents);
coinPurse[coin] = coinCount;
return inputAmountCents -= (coinCount * centValue[coin]);
}

//gets the count of all coin types for a given amount 
function getTotalCoins(inputAmountCents) {
	var amount = inputAmountCents;	
		for (var i = 0; i < purseKeys.length; i++) {
		amount = getCoinCount(purseKeys[i], amount);
	}
}

//Calculates and outputs the count of all coin types for a user provied amount
function coinCalculator(){
var userAmountDollars = prompt("How much money you got?")
var userAmountCents = convertDollarsToCents(userAmountDollars);
getTotalCoins(userAmountCents);
alert("You have " +coinPurse.quarter+ " quarters, " +coinPurse.dime+ " dimes, " +coinPurse.nickel+ " nickels, and " +coinPurse.penny+ " pennies!!")
}

/*
--------Variables----------
*/


// object holds the value of each coin type and the running value used in the getTotalCoins function
var centValue = {
	quarter: 25,
	dime: 10,
	nickel: 5,
	penny: 1,
}

//object to hold the count for each coin type
var coinPurse = {
	quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0	
}

var purseKeys = Object.keys( coinPurse );
var valueKeys = Object.keys( centValue );

/*
--------Workspace----------
*/

//coinCalculator();
getTotalCoins(274)
console.log(coinPurse);