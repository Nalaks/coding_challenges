// Find the odd int https://www.codewars.com/kata/54da5a58ea159efa38000836/

function findOdd(A) {
	const sortedArr = A.sort()
	let sum = 1
	const inter = [0, 0]
	for (let i = 0; i < A.length; i++) {
		if (sortedArr[i] === sortedArr[i + 1]) {
			sum += 1
		}
		if (sortedArr[i] !== sortedArr[i + 1]) {
			if (sum % 2 !== 0) {
				inter[0] = sum
				inter[1] = sortedArr[i]
			}
			sum = 1
		}
	}
	return inter[1]
}
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b)

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]))
