/* Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question, such as "How are you?".

He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).

He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.

Bob's conversational partner is a purist when it comes to written communication 
and always follows normal rules regarding sentence punctuation in English.*/

// const isSilence = message => message.trim().length === 0

// const isShouting = message =>
// 	/[a-z]/i.test(message) && message === message.toUpperCase()

// const isQuestion = message => message.trim().endsWith('?')

// const isShoutingQuestion = message => isShouting(message) && isQuestion(message)

// const isDefault = () => true

// const rules = [
// 	{ test: isSilence, response: 'Fine. Be that way!' },

// 	{ test: isShoutingQuestion, response: "Calm down, I know what I'm doing!" },

// 	{ test: isShouting, response: 'Whoa, chill out!' },

// 	{ test: isQuestion, response: 'Sure.' },

// 	{ test: isDefault, response: 'Whatever.' },
// ]

// export const hey = message => rules.find(({ test }) => test(message)).response

// 

// const isEmpty = message => !/\S/.test(message)

// \S: Este es un metacaracter que coincide con cualquier carácter que no sea un espacio en blanco. 
// Es el opuesto al metacaracter \s que coincide con caracteres de espacio en blanco. En otras palabras, 
// \S coincide con cualquier carácter no espaciador.

// const isQuestion = message => /\?\s*$/.test(message)

// \s*: Esto representa cero o más espacios en blanco.
// El metacaracter \s coincide con cualquier carácter de espacio en blanco (espacios, tabulaciones, saltos de línea, etc.).
// El asterisco "*" indica que puede haber cero o más ocurrencias de caracteres de espacio en blanco.

// const isShout = message => /^[^a-z]*[A-Z][^a-z]*$/.test(message)

// const isQuestionAndShout = message => isQuestion(message) && isShout(message)

// const isDefault = () => true

// const RESPONSE_MAP = [
// 	[isEmpty, 'Fine. Be that way!'],

// 	[isQuestionAndShout, "Calm down, I know what I'm doing!"],

// 	[isQuestion, 'Sure.'],

// 	[isShout, 'Whoa, chill out!'],

// 	[isDefault, 'Whatever.'],
// ]

// export const hey = message => RESPONSE_MAP.find(([check]) => check(message))[1]

//

export const hey = message => {
	if (!message.trim()) return 'Fine. Be that way!'

	const isAllCaps = /[A-Z]/.test(message) && !/[a-z]/.test(message)

	const isQuestion = /\?$/.test(message.trim())

	if (isAllCaps && isQuestion) return "Calm down, I know what I'm doing!"

	if (isAllCaps && !isQuestion) return 'Whoa, chill out!'

	if (!isAllCaps && isQuestion) return 'Sure.'

	return 'Whatever.'
}

//

// export const hey = inputStr => {
// 	const input = inputStr.trim()

// 	const isUppercase =
// 		input === input.toUpperCase() && input !== input.toLowerCase()

// 	const isQuestion = input.slice(-1) === '?'

// 	if (!input) return 'Fine. Be that way!'

// 	if (isQuestion && isUppercase) return "Calm down, I know what I'm doing!"

// 	if (isQuestion) return 'Sure.'

// 	if (isUppercase) return 'Whoa, chill out!'

// 	return 'Whatever.'
// }

describe('Bob', () => {
	test('stating something', () => {
		const result = hey('Tom-ay-to, tom-aaaah-to.')

		expect(result).toEqual('Whatever.')
	})

	xtest('shouting', () => {
		const result = hey('WATCH OUT!')

		expect(result).toEqual('Whoa, chill out!')
	})

	xtest('shouting gibberish', () => {
		const result = hey('FCECDFCAAB')

		expect(result).toEqual('Whoa, chill out!')
	})

	xtest('asking a question', () => {
		const result = hey('Does this cryogenic chamber make me look fat?')

		expect(result).toEqual('Sure.')
	})

	xtest('asking a numeric question', () => {
		const result = hey('You are, what, like 15?')

		expect(result).toEqual('Sure.')
	})

	xtest('asking gibberish', () => {
		const result = hey('fffbbcbeab?')

		expect(result).toEqual('Sure.')
	})

	xtest('talking forcefully', () => {
		const result = hey("Let's go make out behind the gym!")

		expect(result).toEqual('Whatever.')
	})

	xtest('using acronyms in regular speech', () => {
		const result = hey("It's OK if you don't want to go to the DMV.")

		expect(result).toEqual('Whatever.')
	})

	xtest('forceful question', () => {
		const result = hey('WHAT THE HELL WERE YOU THINKING?')

		expect(result).toEqual("Calm down, I know what I'm doing!")
	})

	xtest('shouting numbers', () => {
		const result = hey('1, 2, 3 GO!')

		expect(result).toEqual('Whoa, chill out!')
	})

	xtest('no letters', () => {
		const result = hey('1, 2, 3')

		expect(result).toEqual('Whatever.')
	})

	xtest('question with no letters', () => {
		const result = hey('4?')

		expect(result).toEqual('Sure.')
	})

	xtest('shouting with special characters', () => {
		const result = hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!')

		expect(result).toEqual('Whoa, chill out!')
	})

	xtest('shouting with no exclamation mark', () => {
		const result = hey('I HATE YOU')

		expect(result).toEqual('Whoa, chill out!')
	})

	xtest('statement containing question mark', () => {
		const result = hey('Ending with a ? means a question.')

		expect(result).toEqual('Whatever.')
	})

	xtest('non-letters with question', () => {
		const result = hey(':) ?')

		expect(result).toEqual('Sure.')
	})

	xtest('prattling on', () => {
		const result = hey('Wait! Hang on. Are you going to be OK?')

		expect(result).toEqual('Sure.')
	})

	xtest('silence', () => {
		const result = hey('')

		expect(result).toEqual('Fine. Be that way!')
	})

	xtest('prolonged silence', () => {
		const result = hey('          ')

		expect(result).toEqual('Fine. Be that way!')
	})

	xtest('alternate silence', () => {
		const result = hey('\t\t\t\t\t\t\t\t\t\t')

		expect(result).toEqual('Fine. Be that way!')
	})

	xtest('multiple line question', () => {
		const result = hey(
			'\nDoes this cryogenic chamber make me look fat?\nno'
		)

		expect(result).toEqual('Whatever.')
	})

	xtest('starting with whitespace', () => {
		const result = hey('         hmmmmmmm...')

		expect(result).toEqual('Whatever.')
	})

	xtest('ending with whitespace', () => {
		const result = hey('Okay if like my  spacebar  quite a bit?   ')

		expect(result).toEqual('Sure.')
	})

	xtest('other whitespace', () => {
		const result = hey('\n\r \t')

		expect(result).toEqual('Fine. Be that way!')
	})

	xtest('non-question ending with whitespace', () => {
		const result = hey('This is a statement ending with whitespace      ')

		expect(result).toEqual('Whatever.')
	})
})
