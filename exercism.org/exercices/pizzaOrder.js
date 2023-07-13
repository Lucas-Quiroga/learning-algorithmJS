/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
const PIZZAS = {
	Margherita: 7,

	Caprese: 9,

	Formaggio: 10,
}

const EXTRAS = {
	ExtraSauce: 1,

	ExtraToppings: 2,
}

export function pizzaPrice(pizza, ...extras) {
	// base case: if there are no extras, return the price of the pizza

	if (extras.length === 0) {
		return PIZZAS[pizza]
	}

	// recursive case: if there are extras, add the price of the extra to the price of the pizza

	const [extra, ...rest] = extras

	return EXTRAS[extra] + pizzaPrice(pizza, ...rest)
}

export function pizzaPrice(pizza, ...extras) {
	// Define the price mapping

	const priceMapping = {
		Margherita: 7,

		Caprese: 9,

		Formaggio: 10,

		ExtraSauce: 1,

		ExtraToppings: 2,

		// Add more pizza types and prices as needed
	}

	// Calculate the base price of the pizza

	let totalPrice = priceMapping[pizza]

	// Calculate the price of each extras recursively

	for (let extra of extras) {
		if (priceMapping.hasOwnProperty(extra)) {
			totalPrice += priceMapping[extra]
		}
	}

	return totalPrice
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
	return pizzaOrders.reduce(
		(result, order) => result + pizzaPrice(order.pizza, ...order.extras),
		0
	)
}

export function orderPrice(pizzaOrders) {
	return pizzaOrders.reduce((total, pizzaOrder) => {
		// Destructuring the object
		const { pizza, extras } = pizzaOrder

		return total + pizzaPrice(pizza, ...extras)
	}, 0)
}

export function orderPrice(pizzaOrders) {
	let totalPrice = 0

	for (const order of pizzaOrders) {
		totalPrice += pizzaPrice(order.pizza, ...order.extras)
	}

	return totalPrice
}
