/** Task 1
Determine how long it takes to mix a juice

Li Mei likes to tell her customers in advance how long they have to wait for a juice from 
the menu that they ordered. She has a hard time remembering the exact numbers because the 
time it takes to mix the juices varies. 'Pure Strawberry Joy' takes 0.5 minutes, 'Energizer' 
and 'Green Garden' take 1.5 minutes each, 'Tropical Island' takes 3 minutes and 'All or Nothing' 
takes 5 minutes. For all other drinks (e.g., special offers) you can assume a preparation 
time of 2.5 minutes.

To help your friend, write a function timeToMixJuice that takes a juice from the menu as an 
argument and returns the number of minutes it takes to mix that drink. */

export function timeToMixJuice(name) {
	let result = 0
	switch (name) {
		case 'Pure Strawberry Joy':
			result = 0.5
			break
		case 'Energizer':
			result = 1.5
			break
		case 'Green Garden':
			result = 1.5
			break
		case 'Tropical Island':
			result = 3
			break
		case 'All or Nothing':
			result = 5
			break
		default:
			result = 2.5
	}
	return result
}

//

export function timeToMixJuice(name) {
	switch (name) {
		case 'Pure Strawberry Joy':
			return 0.5

		case 'Energizer':

		case 'Green Garden':
			return 1.5

		case 'Tropical Island':
			return 3

		case 'All or Nothing':
			return 5

		default:
			return 2.5
	}
}

/** Task 2
Replenish the lime wedge supply

A lot of Li Mei's creations include lime wedges, either as an ingredient or as part of the 
decoration. So when she starts her shift in the morning she needs to make sure the bin of 
lime wedges is full for the day ahead.

Implement the function limesToCut which takes the number of lime wedges Li Mei needs to 
cut and an array representing the supply of whole limes she has at hand. She can get 6 
wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 'large' lime. She 
always cuts the limes in the order in which they appear in the list, starting with the first 
item. She keeps going until she reached the number of wedges that she needs or until she runs 
out of limes.

Li Mei would like to know in advance how many limes she needs to cut. The limesToCut function 
should return the number of limes to cut. */

limesToCut(25, ['small', 'small', 'large', 'medium', 'small'])
// => 4

export function limesToCut(wedgesNeeded, limes) {
	let small = 0
	let medium = 0
	let large = 0
	let limesCount = 0

	if (wedgesNeeded == 0) return 0
	if (limes.length == 0) return 0

	limes.map(lime => {
		if (wedgesNeeded <= small * 6 + medium * 8 + large * 10) {
			return limesCount
		}
		switch (lime) {
			case 'small':
				small++
				limesCount++
				break
			case 'medium':
				medium++
				limesCount++
				break
			case 'large':
				large++
				limesCount++
				break
		}
		console.log(small, 'sm', medium, 'md', large, 'lg')
		console.log(limesCount, 'limesCount')
	})
	return limesCount
}

// another one

export function limesToCut(wedgesNeeded, limes) {
	const wedges = {
		small: 6,
		medium: 8,
		large: 10,
	}

	let wedgesCut = 0

	let i = 0

	while (wedgesCut < wedgesNeeded) {
		if (limes[i]) {
			wedgesCut += wedges[limes[i]]

			i++
		} else {
			return i
		}
	}

	return i
}

// another

export function limesToCut(wedgesNeeded, limes) {
	let limesCut = 0

	while (wedgesNeeded > 0 && limes.length > 0) {
		limesCut++

		wedgesNeeded -= LIME_SIZES_TO_WEDGES[limes.shift()]
	}

	return limesCut
}

//

export function limesToCut(wedgesNeeded, limes) {
	let w = wedgesNeeded

	let i = 0

	while (w > 0 && i < limes.length) {
		switch (limes[i]) {
			case 'small':
				w = w - 6

				break

			case 'medium':
				w = w - 8

				break

			case 'large':
				w = w - 10

				break
		}

		i++
	}

	return i
}

/** Li Mei always works until 3pm. Then her employee Dmitry takes over. There are often 
 * drinks that have been ordered but are not prepared yet when Li Mei's shift ends. Dmitry 
 * will then prepare the remaining juices.

To make the hand-over easier, implement a function remainingOrders which takes the number of 
minutes left in Li Mei's shift and an array of juices that have been ordered but not prepared 
yet. The function should return the orders that Li Mei cannot start preparing before the end of 
her workday.

The time left in the shift will always be greater than 0. The array of juices to prepare will 
never be empty. Furthermore, the orders are prepared in the order in which they appear in the 
array. If Li Mei starts to mix a certain juice, she will always finish it even if she has to 
work a bit longer. If there are no remaining orders left that Dmitry needs to take care of, an 
empty array should be returned. */

remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden'])
// => ['Green Garden']

export function remainingOrders(timeLeft, orders) {
	let timeCount = 0
	let toPrepare = []

	orders.map(order => {
		if (timeLeft <= timeCount) {
			toPrepare.push(order)
		}
		console.log(order)
		timeCount += timeToMixJuice(order)
	})
	return toPrepare
}

export function remainingOrders(timeLeft, orders) {
	while (timeLeft > 0) {
		// le resta el tiempo de la primera orden en el array
		timeLeft -= timeToMixJuice(orders[0])
		// elimina ese indice
		orders.shift()
	}
	return orders
}

// the same but more clean

export function remainingOrders(timeLeft, orders) {
	while (timeLeft > 0 && orders.length > 0) {
		timeLeft -= timeToMixJuice(orders.shift())
	}

	return orders
}

//

export function remainingOrders(timeLeft, orders) {
	for (let i = 0; i < orders.length; i++) {
		if (timeLeft <= 0) {
			return orders.slice(i)
		}

		const order = orders[i]

		timeLeft -= timeToMixJuice(order)
	}

	return []
}
