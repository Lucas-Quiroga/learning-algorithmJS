/** Task 1
Determine if you will need a drivers licence

Some kinds of vehicles require a drivers license to operate them. 
Assume only the kinds 'car' and 'truck' require a license, everything 
else can be operated without a license. */

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
	return kind === 'car' || kind === 'truck'
}

export function needsLicense(kind) {
  const VEHICLES_WITH_LICENSES = ['car', 'truck']
	return VEHICLES_WITH_LICENSES.includes(kind)
}

export function needsLicense(kind) {
	return ['car', 'truck'].includes(kind)
}

/** Task 2
Choose between two potential vehicles to buy

You evaluate your options of available vehicles. You manage to narrow it down 
to two options but you need help making the final decision. For that implement 
the function chooseVehicle(option1, option2) that takes two vehicles as 
arguments and returns a decision that includes the option that comes first 
in dictionary order. */

chooseVehicle('Wuling Hongguang', 'Toyota Corolla')
// =>  'Toyota Corolla is clearly the better choice.'

chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf')
// =>  'Volkswagen Beetle is clearly the better choice.'

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
	console.log(option1, option2)
	if (option1 < option2) {
		return option1 + ' is clearly the better choice.'
	} else if (option2 < option1) {
		return `${option2} is clearly the better choice.`
	}
}

export function chooseVehicle(option1, option2) {
	return (
		(option1 > option2 ? option2 : option1) +
		' is clearly the better choice.'
	)
}

export function chooseVehicle(option1, option2) {
	return `${
		option1 < option2 ? option1 : option2
	} is clearly the better choice.`
}

export function chooseVehicle(option1, option2) {
	let choice = option1 < option2 ? option1 : option2

	return `${choice} is clearly the better choice.`
}

export function chooseVehicle(option1, option2) {
	const first = [option1, option2].sort()[0]

	return `${first} is clearly the better choice.`
}

export function chooseVehicle(option1, option2) {
	let vehicles = Array.of(option1, option2)

	vehicles.sort()

	return `${vehicles[0]} is clearly the better choice.`
}

/** Task 3
Calculate an estimation for the price of a used vehicle

Now that you made your decision you want to make sure you get a fair 
price at the dealership. Since you are interested in buying a used 
vehicle, the price depends on how old the vehicle is. For a rough 
estimate, assume if the vehicle is less than 3 years old, it costs 
80% of the original price it had when it was brand new. If it is more 
than 10 years old, it costs 50%. If the vehicle is at least 3 years old 
but not older than 10 years, it costs 70% of the original price. */

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
	if (age > 10) {
		return 0.5 * originalPrice
	} else if (age < 3) {
		return 0.8 * originalPrice
	}

	return 0.7 * originalPrice
}

export function calculateResellPrice(originalPrice, age) {
	const discount = age < 3 ? 0.8 : age > 10 ? 0.5 : 0.7

	return originalPrice * discount
}

export function calculateResellPrice(originalPrice, age) {
	return originalPrice * (age < 3 ? 0.8 : age <= 10 ? 0.7 : 0.5)
}
