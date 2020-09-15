// Does my number look big in this? https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
	let newVal = String(value).split('')
	return (
		newVal
			.map((x) => Number(x) ** newVal.length)
			.reduce((a, b) => a + b, 0) === value
	)
}

console.log(narcissistic(163))
