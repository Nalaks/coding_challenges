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
