/* Introduction

In JavaScript, a set is a list-like structure containing unique values, which can be primitives 
and/or object references. Unlike an array, a set's elements cannot be accessed by index.

A value cannot be added to a set if it is strictly equal to any of the set's elements. */

const set = new Set()
const object = { color: 'lime green' }
const functionallyIdenticalObject = { color: 'lime green' }

set.add(object)
set.add('wow')
set.add(77)

console.log(set.size)
//=> 3

set.add(functionallyIdenticalObject)
// added because functionallyIdenticalObject is not strictly equal to object
console.log(set.size)
//=> 4

set.add(77) // not added because 77 is strictly equal to 77
console.log(set.size)
//=> 4

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
	console.log(playlist)
	const set = new Set()
	const firstTrack = playlist[0]
	const secondTrack = playlist[1]
	const thirdTrack = playlist[2]
	set.add(firstTrack)
	set.add(secondTrack)
	set.add(thirdTrack)
	console.log(set.size)
	return Array.from(set)
} // my solution

export function removeDuplicates(playlist) {
	return Array.from(new Set(playlist))
	// return [...(new Set(playlist))];
} // another guys solutions xD by far more easy

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
	return playlist.includes(track) ? true : false
}

export function hasTrack(playlist, track) {
	return new Set(playlist).has(track)
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
	if (!playlist.includes(track)) playlist.push(track)
	return playlist
}

export function addTrack(playlist, track) {
	playlist = new Set(playlist)

	playlist.add(track)

	return Array.from(playlist)
}

export function addTrack(playlist, track) {
	return [...new Set(playlist).add(track)]
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
	if (playlist.includes(track)) playlist.shift(track)
	return playlist
}

export function deleteTrack(playlist, track) {
	playlist = new Set(playlist)

	playlist.delete(track)

	return Array.from(playlist)
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
	return Array.from(new Set(playlist.map(track => track.split(' - ').pop())))
}

export function listArtists(playlist) {
	const getArtistFromTrack = track => track.split(' - ')[1]

	return [...new Set(playlist.map(getArtistFromTrack))]
}

export function listArtists(playlist) {
	const set = new Set(playlist)

	const artists = new Set([...set].map(x => x.split(' - ')[1]))

	return Array.from(artists)
}

export function listArtists(playlist) {
	let play = new Set(playlist)

	let artists = new Set()

	for (let song of play) {
		let songSplit = song.split(' - ')

		artists.add(songSplit[1])
	}

	return [...artists]
}
