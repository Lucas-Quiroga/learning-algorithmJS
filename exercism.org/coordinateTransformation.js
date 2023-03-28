/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */

export const translate2d = (dx, dy) => (x, y) => [x + dx, y + dy]

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */

export const scale2d = (sx, sy) => (x, y) => [x * sx, y * sy]

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */

export const composeTransform = (f, g) => (x, y) => g(...f(x, y))

export function composeTransform(f, g) {
	return (a, b) => g(...f(a, b))
}

export function composeTransform(f, g) {
	return function (x, y) {
		const fResult = f(x, y)

		return g(fResult[0], fResult[1])
	}
}

export function composeTransform(f, g) {
	return function (x, y) {
		const [a, b] = f(x, y)

		const [c, d] = g(a, b)

		return [c, d]
	}
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */

export function memoizeTransform(f) {
	let prev = {}

	return (x, y) => {
		if (prev.hasOwnProperty([x, y])) return prev[[x, y]]

		prev = { [[x, y]]: f(x, y) }

		return prev[[x, y]]
	}
}

export function memoizeTransform(f) {
	let savedX, savedY, savedResult

	return function (x, y) {
		if (x !== savedX || y !== savedY) {
			savedX = x

			savedY = y

			savedResult = f(x, y)
		}

		return savedResult
	}
}

export function memoizeTransform(f) {
	let previousX, previousY, previousResult

	return function memoised(x, y) {
		if (previousX === x && previousY === y) {
			return previousResult
		}

		previousX = x

		previousY = y

		return (previousResult = f(x, y))
	}
}

export function memoizeTransform(f) {
	let x0, y0, result

	return (x, y) =>
		x == x0 && y == y0 ? result : (result = f((x0 = x), (y0 = y)))
}

export function memoizeTransform(f) {
	let lastX, lastY, lastResult

	return (x, y) => {
		if (lastX === x && lastY === y) return lastResult

		lastX = x

		lastY = y

		lastResult = f(x, y)

		return lastResult
	}
}

export function memoizeTransform(f) {
	let cache = {}

	return function (x, y) {
		console.log(cache)

		if (x == cache.x && y == cache.y) {
			return cache.result
		} else {
			;[cache.x, cache.y] = [x, y]

			cache.result = f(x, y)

			return cache.result
		}
	}
}
