// Week 4 Final Project
// SDI-1
// Author: Scott C. Shamka

// Check for valid phone number

var isValidPhone = function (number){
	
	var valid = false;
	var regexObj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	
		if(regexObj.test(number)){
			// Valid Number
			valid = true;
			return valid;
		} else {
			// Invalid Number
			return valid;
		}
}

console.log(isValidPhone("33689e94577"))