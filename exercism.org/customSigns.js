/** Implement the function buildSign(occasion, name) that accepts a string as
 * the occasion parameter and a string holding someone's name as the name parameter.
 * The two parameters will be embedded into a template string to output the message
 * on the sign. */

buildSign('Birthday', 'Rob')
// => "Happy Birthday Rob!"

export function buildSign(occasion, name) {
	return `Happy ${occasion} ${name}!`
}

/** Implement the function buildBirthdaySign(age) that accepts an age and based on
 * the age will determine part of the message on the sign. If the age is 50 or older,
 * the sign will include the word mature, otherwise the sign will include the word
 * young. */

buildBirthdaySign(45)
// => "Happy Birthday! What a young fellow you are."

export function buildBirthdaySign(age) {
	return `Happy Birthday! What a ${
		age < 50 ? 'young' : 'mature'
	} fellow you are.`
}

/** Implement the function graduationFor(name, year) which takes a name as a string
 * parameter and a year as a number parameter and uses string interpolation to
 * create a phrase for a sign that uses a newline to separate the two lines of the
 * message. */

graduationFor('Hannah', 2022)
// => "Congratulations Hannah!\nClass of 2022"

export function graduationFor(name, year) {
	return `Congratulations ${name}!\nClass of ${year}`
}

/** Implement the function costOf(sign, currency) which takes a string that holds the
 * contents of the sign and a string that represents the currency. The sign has a
 * base price of 20 in the given currency. Additionally each letter costs 2.
 * (Whitespaces are included in the calculation.) The phrase returned includes the
 * cost to create the sign, written with two digits after the decimal point, followed
 * by the currency string. */

costOf('Happy Birthday Rob!', 'dollars')
// => "Your sign costs 58.00 dollars."

//my solution
export function costOf(sign, currency) {
	const value = sign.split('').length * 2 + 20
	return `Your sign costs ${value}.00 ${currency}.`
}

export function costOf(sign, currency) {
	return `Your sign costs ${Number(sign.length) * 2 + 20}.00 ${currency}.`
}

export function costOf(sign, currency) {
	return `Your sign costs ${(20 + 2 * sign.length).toFixed(2)} ${currency}.`
}
