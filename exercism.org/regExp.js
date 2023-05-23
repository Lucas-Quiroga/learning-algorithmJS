// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

// export function isValidCommand(command) {
// 	// my solution
// 	const splitedString = command.split(/\s/)
// 	console.log(splitedString)
// 	return splitedString[0].match(/chatbot/i) ? true : false
// }

// another guy solution
export const isValidCommand = command => /^chatbot.*/i.test(command)
// .*: The dot . matches any character (except newline), and * quantifier means zero or more occurrences. Therefore, .* matches any sequence of characters.

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
// export function removeEmoji(message) {
// 	return message.replace(/emoji[0-9][0-9][0-9][0-9]/g, '')
// }

export const removeEmoji = message => message.replace(/emoji\d*/g, '');

// \d*: \d represents a digit (0-9), and * quantifier means zero or more occurrences. Therefore, \d* matches any sequence of digits.

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
// export function checkPhoneNumber(number) {
// 	if (/^\(\+[0-9][0-9]\) [0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(number))
// 		// ^: The caret symbol denotes the beginning of a line (although it is not present in the given regular expression).
// 		return 'Thanks! You can now download me to your phone.'
// 	return `Oops, it seems like I can't reach out to ${number}`
// }

export function checkPhoneNumber(number) {
	const REGEX = /\(\+\d{2}\) \d{3}-\d{3}-\d{3}/

	const success = 'Thanks! You can now download me to your phone.'

	const fail = `Oops, it seems like I can't reach out to ${number}`

	return REGEX.test(number) ? success : fail
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
	return userInput.match(/\w*\.\w*/g)
	/* \w represents a word character (alphanumeric or underscore), and * quantifier means zero or more occurrences. Therefore, \w* matches any sequence of word characters. */
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
// export const niceToMeetYou = fullName => {
// 	const [surname, name] = fullName.match(/\w+/g)
// 	return `Nice to meet you, ${name} ${surname}`
// }

// export function niceToMeetYou(fullName) {
// 	const politeName = fullName.replace(/([a-z]+), ([a-z]+)/i, '$2 $1')
// 	return `Nice to meet you, ${politeName}`
// }

export function niceToMeetYou(fullName) {
	const name = fullName.split(/,\s/).reverse().join(' ')
	return `Nice to meet you, ${name}`
}
