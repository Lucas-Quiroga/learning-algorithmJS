/** Task 1
Determine the total number of birds that you counted so far

Let us start analyzing the data by getting a high-level view. 
Find out how many birds you counted in total since you started your logs.

Implement a function totalBirdCount that accepts an array that 
contains the bird count per day. It should return the total number 
of birds that you counted. */

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]
totalBirdCount(birdsPerDay)
// => 34

export function totalBirdCount(birdsPerDay) {
	let acc = 0
	const days = birdsPerDay.length

	for (let b = 0; b < days; b++) {
		acc += birdsPerDay[b]
	}
	return acc
}

export function totalBirdCount(birdsPerDay) {
	return birdsPerDay.reduce((acc, cur) => acc + cur)
}

/** Task 2
Calculate the number of visiting birds in a specific week

Now that you got a general feel for your bird count numbers, 
you want to make a more fine-grained analysis.

Implement a function birdsInWeek that accepts an array of bird 
counts per day and a week number. It returns the total number of 
birds that you counted in that specific week. You can assume weeks 
are always tracked completely. */

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]
birdsInWeek(birdsPerDay, 2)
// => 12

export function birdsInWeek(birdsPerDay, week) {
	let totalBirds = 0
	let i = 0
	let lastDayOfTheWeek = 7

	if (week != 1) {
		i = week * 7 - 7
		lastDayOfTheWeek = week * 7
	}

	for (i; i < lastDayOfTheWeek; i++) {
		totalBirds += birdsPerDay[i]
		console.log(totalBirds)
	}
	return totalBirds
}

export function birdsInWeek(birdsPerDay, week) {
	return totalBirdCount(birdsPerDay.slice(week * 7 - 7, week * 7))
}

export function birdsInWeek(birdsPerDay, week) {
	const startDay = (week - 1) * 7

	const endDay = startDay + 7

	let count = 0

	for (let i = startDay; i < endDay; i++) {
		count += birdsPerDay[i]
	}

	return count
}

export function birdsInWeek(birdsPerDay, week) {
	var end = week * 7
	var start = (week - 1) * 7

	return totalBirdCount(birdsPerDay.slice(start, end))
}

export function birdsInWeek(birdsPerDay, week) {
	let oneWeek = birdsPerDay.splice((week - 1) * 7, 7)

	return totalBirdCount(oneWeek)
}

/** Task 3
Fix a counting mistake

You realized that all the time you were trying to keep track of the birds, 
there was one hiding in a far corner of the garden. You figured out that 
this bird always spent every second day in your garden. You do not know 
exactly where it was in between those days but definitely not in your garden. 
Your bird watcher intuition also tells you that the bird was in your garden 
on the first day that you tracked in your list.

Given this new information, write a function fixBirdCountLog that takes an 
array of birds counted per day as an argument. It should correct the counting 
mistake and return the modified array. */

birdsPerDay = [2, 5, 0, 7, 4, 1]
fixBirdCountLog(birdsPerDay)
// => [3, 5, 1, 7, 5, 1]

export function fixBirdCountLog(birdsPerDay) {
	let birdInGarden = true // assume the bird is in the garden on the first day
	for (let i = 0; i < birdsPerDay.length; i++) {
		if (birdInGarden) {
			birdInGarden = false // the bird won't be in the garden on the next day
			birdsPerDay[i]++ // adjust the count
		} else {
			birdInGarden = true // the bird will be in the garden on the next day
		}
	}
	return birdsPerDay
}

export function fixBirdCountLog(birdsPerDay) {
	for (let i = 0; i < birdsPerDay.length; i += 2) birdsPerDay[i]++

	return birdsPerDay
}

export function fixBirdCountLog(birdsPerDay) {
	// birdsPerDay.map((day, index) => index % 2 === 0 ? day : day + 1)

	const days = birdsPerDay.length

	for (let i = 0; i < days; i += 2) {
		birdsPerDay[i]++
	}

	return birdsPerDay
}
