function flatten(arr, c = Infinity) {
	return c > 0
		? arr.reduce(
				(acc, val) =>
					acc.concat(Array.isArray(val) ? flatten(val, c - 1) : val),
				[]
		  )
		: arr.slice()
}

console.log(flatten([[[[[2, 14, 'rubber']]], 2, 3, 4]]))
