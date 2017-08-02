/*
--------Functions----------
*/

//converts dollars to cents 
function convertDollarsToCents(dollarAmount) {
	centAmount = (dollarAmount * 100);
	return centAmount;
}

function getCoinCount(coin, inputAmountCents) {
var countAsCents = inputAmountCents / centValue[coin];
var coinCount = Math.floor(countAsCents);
coinPurse[coin] = coinCount;
return inputAmountCents -= (coinCount * centValue[coin]);
}

//gets the count of all coin types for a given amount 
function getTotalCoins(inputAmountCents) {
	var amount = inputAmountCents;	
		for (var i = 0; i < coinPurseKeys.length; i++) {
		amount = getCoinCount(coinPurseKeys[i], amount);
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

// turns the keys of the coinPurse object into an array
var coinPurseKeys = Object.keys(coinPurse);

// turns the keys of the coinValue object into an array
var coinValueKeys = Object.keys(centValue);

/*
--------Workspace----------
*/

coinCalculator();
console.log(coinPurseKeys);