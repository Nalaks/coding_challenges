// Regex validate PIN code https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN(pin) {
	if (pin.match(/\D/g)) {
		return false
	} else if (pin.length === 6) {
		return true
	} else if (pin.length === 4) {
		return true
	} else {
		return false
	}
}

console.log(validatePIN('12353'))
