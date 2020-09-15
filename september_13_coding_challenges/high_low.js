// Highest and Lowest https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
	return `${Math.max(...numbers.split(' '))} ${Math.min(
		...numbers.split(' ')
	)}`
}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'))
