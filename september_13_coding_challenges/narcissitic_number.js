function narcissistic(value) {
	let newVal = String(value).split('')
	return (
		newVal
			.map((x) => Number(x) ** newVal.length)
			.reduce((a, b) => a + b, 0) === value
	)
}

console.log(narcissistic(163))
