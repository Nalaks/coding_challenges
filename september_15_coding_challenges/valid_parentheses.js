// Valid Parentheses https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
	let indent = 0

	for (let i = 0; i < parens.length && indent >= 0; i++) {
		indent += parens[i] == '(' ? 1 : -1
	}

	return indent === 0
}

console.log(validParentheses('(())((()())())'))
