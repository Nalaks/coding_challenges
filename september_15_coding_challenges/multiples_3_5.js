// Multiples of 3 or 5 https://www.codewars.com/kata/514b92a657cdc65150000006/

function solution(number) {
	if (number < 0) {
		return 0
	}
	const numArr = [...new Array(number).keys()].slice(1)
	let sum = 0
	for (let i = 0; i < number; i++) {
		if (numArr[i] < 0) {
			sum
		} else if (numArr[i] % 3 === 0 || numArr[i] % 5 === 0) {
			sum += numArr[i]
		}
	}
	return sum
}

console.log(solution(-1))
