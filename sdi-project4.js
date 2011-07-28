// Week 4 Final Project
// SDI-1
// Author: Scott C. Shamka

// Check for valid phone number

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

// Check for valid email address

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

console.log(isValidEmail("casmere1235@gmail.com"))
