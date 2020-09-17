function trace(arr) {
	return arr.reduce((a, b, i) => a + b[i], 0)
}

console.log(
	trace([
		[1, 0, 1, 0],
		[0, 2, 0, 2],
		[3, 0, 3, 0],
		[0, 4, 0, 4]
	])
)
