/* You work for a company that sells fonts through their website. They'd like to show a 
different sentence each time someone views a font on their website. To give a comprehensive 
sense of the font, the random sentences should use all the letters in the English alphabet.

They're running a competition to get suggestions for sentences that they can use. You're in 
charge of checking the submissions to see if they are valid.

Pangram comes from Greek, παν γράμμα, pan gramma, which means "every letter".

The best known English pangram is:

The quick brown fox jumps over the lazy dog.

For this exercise we only use the basic letters used in the English alphabet: a to z.*/

export const isPangram = sentence => {
	// Remove non-alphabetic characters and convert to lowercase
	sentence = sentence.replace(/[^a-z]/gi, '').toLowerCase()

	// Create a Set of unique characters
	let uniqueChars = new Set(sentence)

	// Check if the Set contains all the letters of the alphabet
	return [...'abcdefghijklmnopqrstuvwxyz'].every(letter =>
		uniqueChars.has(letter)
	)
}

export const isPangram = input => {
	const inputLowered = input.toLowerCase()

	return [...'abcdefghijklmnopqrstuvwxyz'].every(c =>
		inputLowered.includes(c)
	)
}

const ENGLISH_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

export const isPangram = string => {
	const stringSet = new Set(string.toLowerCase())

	return ENGLISH_ALPHABET.every(char => stringSet.has(char))
}

export const isPangram = sentence => {
	const regex = /[a-z]/

	const letters = Array.from(sentence.toLowerCase()).filter(x =>
		regex.test(x)
	)

	const s = new Set(letters)

	return s.size == 26
}

export const isPangram = str => {
	Array.from('abcdefghijklmnopqrstuvxyz').every(letter =>
		str.toLowerCase().includes(letter)
	)
}

export const isPangram = sentence => {
	const uniqueLetters = new Set()

	for (let letter of sentence.toLowerCase()) {
		if (letter.match(/[a-z]/)) {
			uniqueLetters.add(letter)
		}
	}

	return uniqueLetters.size === 26
}
