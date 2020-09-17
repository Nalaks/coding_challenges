function countAll(str) {
	const letters = (str.match(/[a-z]/gi) || '').length
	const numbers = (str.match(/\d/g) || '').length
	return { LETTERS: letters, DIGITS: numbers }
}

console.log(countAll('Hello World'))
