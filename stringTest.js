/** Instructions

A new poetry club has opened in town, and you're thinking of attending. Because there have been incidents 
in the past, the club has a very specific door policy which you'll need to master, before attempting entry.

There are two doors at the poetry club, a front and a back door, and both are guarded. To gain entry, 
you'll need to work out the password of the day.

The password is always based on a poem and can be derived in a two-step process.

  1.  The guard will recite the poem, one line at a time and you have to respond with 
  an appropriate letter of that line.
  2.  The guard will now tell you all the letters you responded with at once, and you need to write them down 
  on a piece of paper in a specific format.

The details of the process depend on which door you are trying to enter.*/

/** Task 1
Get the first letter of a sentence

To determine the letters for the front door password, you need to respond with the first letter of the 
line of the poem, that the guard recites to you.

To end up with a nice password, the members of the poetry club like to use acrostic poems. This means 
that the first letter of each sentence forms a word. Here is an example by one of their favorite 
writers Michael Lockwood.

Stands so high
Huge hooves too
Impatiently waits for
Reins and harness
Eager to leave

So when the guard recites Stands so high, you'll respond S, when the guard recites Huge hooves too, 
you'll respond H.

Implement the function frontDoorResponse that takes a line of the poem as an argument and returns 
the first letter of that line.

frontDoorResponse('Stands so high');
// => "S" */

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
	return line[0]
}

/** Task 2
Capitalize a word

Now that you have all the correct letters, all you need to do to get the password for the front 
door is to correctly capitalize the word.

Implement the function frontDoorPassword that accepts a string (the combined letters you found 
  in task 1) and returns it correctly capitalized. */

frontDoorPassword('SHIRE')
// => "Shire"

frontDoorPassword('shire')
// => "Shire"

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
	let lowerLetters = word.slice(1).toLowerCase()
	let firstLetter = word[0].toUpperCase()
	let fullWord = firstLetter.concat(lowerLetters)
	return fullWord
}

/** Task 3
Get the last letter of a sentence

To determine letters for the back door password, you need to respond 
with the last letter of the line of the poem that the guard recites to you. */

const SHIRE_HORSE_WITH_SPACES = [
	'Stands so high   ',
	'\tHuge hooves too\t',
	'Impatiently waits for \t \t',
	'    Reins and harness    ',
	'Eager to leave\n\n',
]

const actualLetters = recite(SHIRE_HORSE_WITH_SPACES, backDoorResponse)
const expectedLetters = ['h', 'o', 'r', 's', 'e']
expect(actualLetters).toStrictEqual(expectedLetters)

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
	let lineTrim = line.trim()
	let lastIndexs = lineTrim.length
	return lineTrim.slice(lastIndexs -1)
}

/** Task 4
Be polite

To enter the poetry club via the back door, you need to be extra polite. So to derive 
the password, this time you need to correctly capitalize the word and add ', please' at the end.

Implement the function backDoorPassword that accepts a string (the combined letters 
you found in task 3) and returns the polite version of the capitalized password. */

backDoorPassword('horse')
// => "Horse, please"

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
	let palabra = frontDoorPassword(word)
	return palabra.concat(', please')
}