function solution(roman) {
	return roman
		.split('')
		.map((x) => {
			switch (x) {
				case 'I':
					return 1
				case 'V':
					return 5
				case 'X':
					return 10
				case 'L':
					return 50
				case 'C':
					return 100
				case 'D':
					return 500
				case 'M':
					return 1000
				default:
					break
			}
		})
		.reduce(
			(acc, val, i, arr) =>
				arr[i + 1] > val ? acc - val : acc + val,
			0
		)
}

console.log(solution('IV'))
