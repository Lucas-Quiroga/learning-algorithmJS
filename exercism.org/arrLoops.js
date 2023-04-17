/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
	let acc = 0
	stack.forEach(each => (acc += each === card ? 1 : 0))
	return acc
}

export function cardTypeCheck(stack, card) {
	let occurence = 0

	stack.forEach(cardType => {
		if (cardType === card) {
			occurence++
		}
	})

	return occurence
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
	//if it is true the rest would be 0 and if it is false would be 1
	const rest = type ? 0 : 1

	let count = 0

	for (const card of stack) {
		if (card % 2 === rest) {
			count++
		}
	}
	return count
}
