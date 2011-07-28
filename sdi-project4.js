// Week 4 Final Project
// SDI-1
// Author: Scott C. Shamka

// 1. Check for valid phone number

var isValidPhone = function (number){
	
	var valid = false;
	
	// check for North American Phone number
	var regexObj = /^\(?([2-9][0-8][0-9])\)?[-. ]?([2-9][0-9]{2})[-. ]?([0-9]{4})$/;
	
		if(regexObj.test(number)){
			// Valid Number
			valid = true;
			return valid;
		} else {
			// Invalid Number
			return valid;
		}
}

// 2. Check for valid email address

var isValidEmail = function (email){

	var valid = false;
	
	var regexObj =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		if(regexObj.test(email)){
			// valid email
			valid = true;
			return valid;
		} else {
			// invalid email
			return valid;
		}
}

// 3. Title Case a string

String.prototype.titleCase = function () {
	var str = "";
	var wrds = this.split(" ");
	for(keyvar in wrds)
	{
	str += ' ' + wrds[keyvar].substr(0,1).toUpperCase()
	 + wrds[keyvar].substr(1,wrds[keyvar].length);
	}
   return str;
}

var string = "this is a string";
string = string.titleCase();
console.log(string);

// 4. Format Decimal Places

var formatDecimalPlaces = function (num, places){
	
	var result = num.toFixed(places);
	console.log(result);
}

formatDecimalPlaces(12.1,2);

// 5. change string to number

var doStrToNum = function (str){

	var int = parseInt(str);
	return int;
}

var theAnswerToLife = doStrToNum("42");
console.log("The answer to life the universe and everything is ", theAnswerToLife);

// 6. day between 2 dates

var getDaysBetween = function (date1, date2){

}

