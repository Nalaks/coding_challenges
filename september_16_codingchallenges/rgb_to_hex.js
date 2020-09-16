// RGB To Hex Conversion https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
	const colorArr = [r, g, b]
	const hexArr = []

	for (let i = 0; i < colorArr.length; i++) {
		if (colorArr[i] > 255) {
			colorArr[i] = 255
		} else if (colorArr[i] < 0) {
			colorArr[i] = 0
		}
		let hexStr1 = colorArr[i] / 16
		let hexStr2 = (hexStr1 - Math.floor(hexStr1)) * 16
		console.log(hexStr1, hexStr2)
		switch (Math.floor(hexStr1)) {
			case 10:
				hexStr1 = 'A'
				break
			case 11:
				hexStr1 = 'B'
				break
			case 12:
				hexStr1 = 'C'
				break
			case 13:
				hexStr1 = 'D'
				break
			case 14:
				hexStr1 = 'E'
				break
			case 15:
				hexStr1 = 'F'
				break
			default:
				hexStr1 = Math.floor(hexStr1)
		}
		switch (hexStr2) {
			case 10:
				hexStr2 = 'A'
				break
			case 11:
				hexStr2 = 'B'
				break
			case 12:
				hexStr2 = 'C'
				break
			case 13:
				hexStr2 = 'D'
				break
			case 14:
				hexStr2 = 'E'
				break
			case 15:
				hexStr2 = 'F'
				break
			default:
				hexStr2
		}
		hexArr.push(hexStr1)
		hexArr.push(hexStr2)
	}
	return hexArr.join('')
}

console.log(rgb(173, 255, 47))
