/** Instructions

An anagram is a rearrangement of letters to form a new word: for example 
"owns" is an anagram of "snow". A word is not its own anagram: for example, 
"stop" is not an anagram of "stop".

Given a target word and a set of candidate words, this exercise requests the 
anagram set: the subset of the candidates that are anagrams of the target.

The target and candidates are words of one or more ASCII alphabetic characters 
(A-Z and a-z). Lowercase and uppercase characters are equivalent: for example, 
"PoTS" is an anagram of "sTOp", but StoP is not an anagram of sTOp. The anagram 
set is the subset of the candidate set that are anagrams of the target (in any 
  order). Words in the anagram set should have the same letter case as in the 
  candidate set.

Given the target "stone" and candidates "stone", "tones", "banana", "tons", 
"notes", "Seton", the anagram set is "tones", "notes", "Seton". */

// my solution with help of chatGPT

export const findAnagrams = (target, candidates) => {
	// Convert target word to lowercase and sort its letters
	const targetCanonical = target.toLowerCase().split('').sort().join('')

	// Initialize an empty array to store the anagram candidates
	const anagram = []

	// Iterate through the candidate words
	for (let candidate of candidates) {
		// Convert candidate word to lowercase and sort its letters
		const candidateCanonical = candidate
			.toLowerCase()
			.split('')
			.sort()
			.join('')

		// Check if the candidate is an anagram of the target
		if (
			candidateCanonical === targetCanonical &&
			candidate.toLowerCase() !== target.toLowerCase()
		) {
			// Add candidate to the anagram
			anagram.push(candidate)
		}
	}

	return anagram
}

export const findAnagrams = (Word, arrayOfWords) => {
	return arrayOfWords.filter(candidate => {
		let targetWord = Word.toLowerCase()

		let testCandidate = candidate.toLowerCase()

		if (testCandidate === targetWord) return false

		for (const char of testCandidate) {
			if (targetWord.includes(char)) {
				targetWord = targetWord.replace(char, '')
			} else {
				return false
			}
		}
		//if targetWord isn't length the candidate matches
		if (!targetWord.length) return true
	})
}

export const findAnagrams = (word, listOfWords) => {
	let sortedWord = word.toLowerCase().split('').sort().join('')

	return listOfWords.filter(item => {
		let sortedItem = item.toLowerCase().split('').sort().join('')

		if (
			sortedItem === sortedWord &&
			item.toLowerCase() !== word.toLowerCase()
		) {
			return item
		}
	})
}

//good one
export const findAnagrams = (testWord, wordList) => {
	return wordList.filter(
		word => sortStr(word) === sortStr(testWord) && !isEqual(word, testWord)
	)
}

function sortStr(str) {
	return str.toLowerCase().split('').sort().join('')
}

function isEqual(str1, str2) {
	return str1.toLowerCase() === str2.toLowerCase()
}

//another clean solution
const sortChars = word => [...word].sort().join('')

export const findAnagrams = (word, anagrams) => {
	const lowerWord = word.toLowerCase()

	const sortedWord = sortChars(lowerWord)

	return anagrams.filter(anagram => {
		const lowerAnagram = anagram.toLowerCase()

		return (
			lowerAnagram !== lowerWord && sortChars(lowerAnagram) === sortedWord
		)
	})
}

//claro rey
export const findAnagrams = (word, wordList) => {
	return wordList

		.filter(w => w.toLowerCase() !== word.toLowerCase())

		.filter(
			w =>
				w.toLowerCase().split('').sort().join('') ===
				word.toLowerCase().split('').sort().join('')
		)
}

//hace lo que quieras xD
export const findAnagrams = (word, arr) =>
	arr.filter(
		val =>
			word.toLowerCase() !== val.toLowerCase() &&
			word.toLowerCase().split('').sort().join('') ===
				val.toLowerCase().split('').sort().join('')
	)
