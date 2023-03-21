/** Write a function twoSum that accepts two arrays as parameters. Each
 * array consists of one or more numbers between 0 and 9. The function
 * should interpret each array as a number and return the sum of those
 * two numbers. */

twoSum([1, 2, 3], [0, 7])
//=> 130

// [1, 2, 3] represents 123 and [0, 7] represents 7.
// 123 + 7 = 130

// my solution
export function twoSum(array1, array2) {
	let first = ''
	for (let i = 0; i < array1.length; i++) {
		first += array1[i]
		console.log(array1[i])
	}

	let second = ''
	for (let i = 0; i < array2.length; i++) {
		second += array2[i]
		console.log(array2[i])
	}

	return Number(first) + Number(second)
}

export function twoSum(array1, array2) {
	return Number(array1.join('')) + Number(array2.join(''))
}

/** This months' lucky numbers should be numbers that are palindromes. 
 * Palindromic numbers remain the same when the digits are reversed.

Implement the new luckyNumber function that accepts a number as a 
parameter. The function should return true if the number is a palindrome 
and false otherwise. The input number will always be a positive integer. */

luckyNumber(1441)
//=>  true

luckyNumber(123)
//=> false

export function luckyNumber(value) {
	return String(value) === [...String(value)].reverse().join('')
}

export function luckyNumber(value) {
	const array = [...String(value)]

	let is_match = true

	array.map((el, i, arr) => {
		const reversed = arr.reverse()

		if (el != reversed[i]) is_match = false
	})

	return is_match
}

/** Write a function errorMessage that accepts the user input as a
 * parameter. If the user did not provide any input, errorMessage should
 * return 'Required field'. If the input does not represent a non-zero
 * number (according to the JavaScript conversion rules), 'Must be a number
 * besides 0' should be returned. In all other cases, you can assume the
 * input is valid, the return value should be an empty string. */

export function errorMessage(input) {
	if (!input) {
		return 'Required field'
	}
	return Number(input) ? '' : 'Must be a number besides 0'
}

export function errorMessage(input) {
	return !Boolean(input)
		? 'Required field'
		: Boolean(Number(input))
		? ''
		: 'Must be a number besides 0'
}
