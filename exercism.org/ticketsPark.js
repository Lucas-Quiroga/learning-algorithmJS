/** That means while null represents an empty value (but still a value), undefined represents the total absence of a value. 🤯 */

/** Optional Chaining

If you try to retrieve a nested value in an object but the parent key does not exist, JavaScript will throw an error. 
To easily avoid this, optional chaining was added to the language specification in 2020. With the optional chaining operator ?. 
you can ensure that JavaScript only tries to access the nested key if the parent was not null or undefined. 
Otherwise, undefined is returned. */

const obj = {
	address: {
		street: 'Trincomalee Highway',
		city: 'Batticaloa',
	},
}

obj.address.zipCode
// => undefined

obj.residence.street
// => TypeError: Cannot read property 'street' of undefined

obj.residence?.street
// => undefined

/** Nullish Coalescing

There are situations where you want to apply a default value in case a variable is null or undefined (but only then). 
To address this, the nullish coalescing operator ?? was introduced in 2020. It returns the right-hand side operand only 
when the left-hand side operand is null or undefined. Otherwise, the left-hand side operand is returned. */

let amount = null
amount = amount ?? 1
// => 1

amount = 0
amount = amount ?? 1
// => 0

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
	return {
		name: name,
		age: age,
		ticketId: ticketId,
	}
}

export function createVisitor(name, age, ticketId) {
	return { name, age, ticketId }
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
	visitor.ticketId = null
	return visitor
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
	switch (tickets[ticketId]) {
		case undefined:
			return 'unknown ticket id'
		case null:
			return 'not sold'
		default:
			return `sold to ${tickets[ticketId]}`
	}
}

export function ticketStatus(tickets, ticketId) {
	if (tickets[ticketId] === undefined) {
		return 'unknown ticket id'
	}

	if (tickets[ticketId] === null) {
		return 'not sold'
	}

	return `sold to ${tickets[ticketId]}`
}

export function ticketStatus(tickets, ticketId) {
	const name = tickets[ticketId]

	switch (name) {
		case undefined:
			return 'unknown ticket id'

		case null:
			return 'not sold'

		default:
			return 'sold to ' + name
	}
}

export function ticketStatus(tickets, ticketId) {
	let msg = ''

	if (tickets[ticketId]) msg = `sold to ${tickets[ticketId]}`
	else if (tickets[ticketId] === null) msg = `not sold`
	else msg = `unknown ticket id`

	return msg
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
	return tickets[ticketId] ?? 'invalid ticket !!!'
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
	return visitor?.gtc?.version
}
