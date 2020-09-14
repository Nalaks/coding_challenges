function countSmileys(arr) {
	return arr.filter((x) => x.match(/(:|;)(-?|~?)(\)|D)/)).length
}

console.log(countSmileys([':)', ';(', ';}', ':-D']))
