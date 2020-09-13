function iqTest(numbers) {
	let checkNum = numbers.split(' ').filter((x) => Number(x) % 2 !== 0)
	if (checkNum.length === 1) {
		return (
			numbers.split(' ').findIndex((x) => Number(x) % 2 !== 0) + 1
		)
	} else {
		return (
			numbers.split(' ').findIndex((x) => Number(x) % 2 === 0) + 1
		)
	}
}

console.log(iqTest('2 4 7 8 10'))
