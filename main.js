function convertDollarsToCents(dollarAmount) {
	centAmount = (dollarAmount * 100);
	return centAmount;
}

function convertCentsToDollars(centAmount) {
	dollarAmount = (centAmount / 100);
	return dollarAmount;
}

function getQuarterNumber (inputAmountCents) {
var countAsCents = inputAmountCents / centValues.quarter;
var quarterCount = Math.floor(countAsCents);
coinPurse.quarters = quarterCount;
remainingAmountCents = inputAmountCents - (quarterCount * centValues.quarter);
}

function getDimeNumber (inputAmountCents) {
var countAsCents = inputAmountCents / centValues.dime;
var dimeCount = Math.floor(countAsCents);
coinPurse.dimes = dimeCount;
remainingAmountCents = inputAmountCents - (dimeCount * centValues.dime);
}

function getNickelNumber (inputAmountCents) {
var countAsCents = inputAmountCents / centValues.nickel;
var nickelCount = Math.floor(countAsCents);
coinPurse.nickels = nickelCount;
remainingAmountCents = inputAmountCents - (nickelCount * centValues.nickel);
}


function getPennyNumber (inputAmountCents) {
var countAsCents = inputAmountCents / centValues.penny;
var pennyCount = Math.floor(countAsCents);
coinPurse.pennies = pennyCount;
remainingAmountCents = inputAmountCents - (pennyCount * centValues.penny);
}

function coinCount(inputAmountCents) {

	getQuarterNumber(inputAmountCents);
	getDimeNumber(remainingAmountCents);
	getNickelNumber(remainingAmountCents);
	getPennyNumber(remainingAmountCents);
	return coinPurse;
}



var centValues = {
	quarter: 25,
	dime: 10,
	nickel: 5,
	penny: 1
}

var coinPurse = {
	quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0	
}

var runningAmountCents;
var inputAmountDollars = 1.61;
var amount = convertDollarsToCents(inputAmountDollars);


console.log(coinCount(amount));