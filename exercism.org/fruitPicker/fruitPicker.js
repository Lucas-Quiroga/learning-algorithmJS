import { notify } from './notifier'
import { order } from './grocer'

/** Write a callback function called onSuccess to be called when the
 * order is successful. It should invoke the imported notify function
 * passing a success message to it. */

onSuccess()
// => `notify` called with `{ message: 'SUCCESS' }`

/**
 * @return void
 */
export function onSuccess(message) {
	notify({ message: 'SUCCESS' })
}

/** Write a callback function called onError to be called when the
 * order encounters an error. It should invoke the imported notify
 * function passing an error message to it. */

onError()
// => `notify` called with `{ message: 'ERROR' }`

/**
 * @return void
 */
export function onError(message) {
	notify({ message: 'ERROR' })
}

/** The grocer's API provides a function to order from their inventory 
 * called order. It receives three arguments: a query, a callback function to 
 * be invoked when the order is successful, and a callback function to be 
 * invoked when the order encounters an error. You decide to wrap the api 
 * function call in a newly defined function orderFromGrocer to insulate 
 * your codebase from external changes. Your function should forward the 
 * arguments (which match the provided api function) to the api function.

The query takes the form of an object: */

const query = {
	variety: string,
	quantity: number,
}

orderFromGrocer(
	{ variety: 'pear', quantity: 12 },
	exampleSuccessCallback,
	exampleErrorCallback
)
// => `order` was called with the query and the callbacks

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
	order(query, onSuccessCallback, onErrorCallback)
}

/** You find that you are calling this function from many different places
 * with the same functions. Seeing an opportunity to refactor your code,
 * you want to create a function where you can supply the variety and quantity
 * to order as arguments.  */

postOrder('peach', 100)
// => order submitted for 100 peaches

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
	orderFromGrocer({ variety, quantity }, onSuccess, onError)
}

export function postOrder(variety, quantity) {
	const newOrder = { variety, quantity }

	return orderFromGrocer(newOrder, onSuccess, onError)
}
