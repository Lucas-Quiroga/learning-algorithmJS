/* 
About Inheritance

Inheritance is a way to create parent-child relationships between classes. The child class 
(sometimes referred to as a subclass) has access to the behavior and data defined by the parent class 
(sometimes referred to as a superclass). */

class Pet {
	constructor(name) {
		this.name = name
	}

	introduce() {
		console.log(`This is my pet, ${this.name}.`)
	}
}

class Dog extends Pet {}

const dog = new Dog('Otis')
dog.introduce()
// => This is my pet, Otis.

/* The extends keyword in the child class declaration establishes a relationship with the parent 
class through the prototype chain.

Objects created by the child's constructor will have the parent class's prototype in their prototype 
chain, providing access to any methods or data defined by the parent. */

Dog.prototype.isPrototypeOf(dog) // => true
Pet.prototype.isPrototypeOf(dog) // => true
Pet.prototype.isPrototypeOf(Dog.prototype) // => true

Pet.prototype.hasOwnProperty('introduce') // => true
Dog.prototype.hasOwnProperty('introduce') // => false
dog.hasOwnProperty('introduce') // => false

/* Errors

Errors are useful to report when something is wrong or unexpected in a program or a piece of code.

They are javascript objects.

The main property of this object is message: */

const error = new Error('Oops, something went wrong')

console.log(error.message)
// => "Oops, something went wrong"

// Using the throw syntax, you can throw an Error.

throw new Error('Oops')

// When an error is thrown, the current execution is stopped and resumes in the first catch block of the call stack.

try {
	throw new Error('Oops')
} catch (error) {
	console.log(error.message)
	// => "Oops"
}

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
	constructor(temperature) {
		super(`The temperature is ${temperature}! Overheating!`)
		this.temperature = temperature
	}
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
	if (humidityPercentage > 70)
		throw new Error('The humidity exceeds 70% of the room')
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
	if (temperature > 500) throw new OverheatingError(temperature)
	if (temperature == null)
		throw new ArgumentError(
			'The sensor seems broken. Expected temperature, actual null'
		)
}

export function reportOverheating(temperature) {
	if (!temperature) {
		throw new ArgumentError('Null')
	} else if (temperature > 500) {
		throw new OverheatingError(temperature)
	}
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
	try {
		actions.check()
	} catch (error) {
		switch (error.constructor) {
			case ArgumentError:
				actions.alertDeadSensor()
				return
			case OverheatingError: {
				if (error.temperature > 600) {
					actions.shutdown()
					return
				}
				if (error.temperature > 500) {
					actions.alertOverheating()
					return
				}
			}
			default:
				throw error
		}
	}
}

export function monitorTheMachine({
	check,
	alertDeadSensor,
	alertOverheating,
	shutdown,
}) {
	try {
		check()
	} catch (e) {
		if (e instanceof ArgumentError) {
			alertDeadSensor()
		} else if (e instanceof OverheatingError) {
      // e.temperature < 600 ? alertOverheating() : shutdown()
			if (e.temperature < 600) {
				alertOverheating()
			} else {
				shutdown()
			}
		} else {
			throw error
		}
	}
}