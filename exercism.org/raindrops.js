/** The rules of raindrops are that if a given number:

    has 3 as a factor, add 'Pling' to the result.
    has 5 as a factor, add 'Plang' to the result.
    has 7 as a factor, add 'Plong' to the result.
    does not have any of 3, 5, or 7 as a factor, 
    the result should be the digits of the number. */

// my solution
export const convert = n => {
	let out = ''
	if (n % 3 === 0) out += 'Pling'
	if (n % 5 === 0) out += 'Plang'
	if (n % 7 === 0) out += 'Plong'
	if (n % 3 != 0 && n % 5 != 0 && n % 7 != 0) out = n.toString()
	return out
}

//other solutions
export const convert = num => {
	const factors = {
		3: 'Pling',

		5: 'Plang',

		7: 'Plong',
	}

	var convertedText = Object.keys(factors).reduce((acc, curr) => {
		return num % curr === 0 ? acc + factors[curr] : acc
	}, '')

	return convertedText || num.toString()
}

var data = {
	3: 'Pling',

	5: 'Plang',

	7: 'Plong',
}

var keys = Object.keys(data)

export const convert = input => {
	var str = keys

		.filter(i => input % i === 0)

		.map(i => data[i])

		.join('')

	return str || input.toString()
}

export const convert = number => {
	const factors = {
		Pling: 3,
		Plang: 5,
		Plong: 7,
	}

	const drops = Object.keys(factors)

		.filter(key => number % factors[key] === 0)

		.join('')

	return drops || number.toString()
}
