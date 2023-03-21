/** Write a function cookingStatus that accepts the remaining time on the timer in minutes 
 * as a parameter. The function has three possible results.

    If the timer shows 0, it should return 'Lasagna is done.'.
    If the timer shows any other number, the result should be 'Not done, please wait.'.
    If the function is called without a timer value, the result should be 'You forgot to set the timer.'.

The timer will never show a value below 0. */

export function cookingStatus(time) {
	switch (time) {
		case 0:
			return 'Lasagna is done.'
		case undefined:
			return 'You forgot to set the timer.'
		default:
			return 'Not done, please wait.'
	}
}

export function cookingStatus(remainingTime) {
	if (remainingTime === 0) {
		return 'Lasagna is done.'
	}

	if (!remainingTime) {
		return 'You forgot to set the timer.'
	}

	return 'Not done, please wait.'
}

/** Implement a function preparationTime that accepts an array of layers and the average preparation time
 * per layer in minutes. The function should return the estimate for the total preparation time based on the
 * number of layers. If the function is called without providing the average preparation time, 2 minutes should
 * be assumed instead. */

export function preparationTime(layers, time = 2) {
	return layers.length * time
}

/** For each noodle layer in your lasagna, you will need 50 grams of noodles. For each sauce layer in your 
 * lasagna, you will need 0.2 liters of sauce.

Define the function quantities that takes an array of layers as a parameter. The function will then determine 
the quantity of noodles and sauce needed to make your meal. The result should be returned as an object 
with keys noodles and sauce. */

export function quantities(layers) {
	const lasagna = { noodles: 0, sauce: 0 }
	layers.map(x => {
		if (x === 'noodles') lasagna.noodles += 50
		if (x === 'sauce') lasagna.sauce += 0.2
	})
	return lasagna
}

/** Write a function addSecretIngredient that accepts two arrays of ingredients as parameters. The first parameter
 * is the list your friend sent you and the second is the ingredient list for your own recipe. The function should
 * add the last item from your friend's list to the end of your list. The array that represents your recipe should
 * be modified directly and the function should not return anything. However, the first argument should not be modified. */

export function addSecretIngredient(friendList, myList) {
	const ingredient = friendList[friendList.length - 1]
	myList.push(ingredient)
}

export function addSecretIngredient(otherIngredients, myIngredients) {
	myIngredients.push(otherIngredients[otherIngredients.length - 1])
}

/** Implement a function scaleRecipe that takes two parameters.

    A recipe object that holds the amounts needed for 2 portions. The format of the 
    object can be seen in the example below.
    The number of portions you want to cook.

The function should return a recipe object with the amounts needed for the desired number of portions. You want 
to keep the original recipe though. This means, in this task the recipe argument should not be modified. */

const recipe = {
	noodles: 200,
	sauce: 0.5,
	mozzarella: 1,
	meat: 100,
}

export function scaleRecipe(recipe, portions) {
	const scaled = { ...recipe }
	const factor = portions / 2
	for (let ingredient in scaled) {
		scaled[ingredient] *= factor
	}
	return scaled
}

export function scaleRecipe(recipe, portions) {
	let adjustPortions = function (ingredient, portions) {
		return (ingredient / 2) * portions
	}

	const scaledRecipe = {}

	for (let ingredient in recipe) {
		scaledRecipe[ingredient] = adjustPortions(recipe[ingredient], portions)
	}

	return scaledRecipe
}

export function scaleRecipe(recipe, scale) {
	scale /= 2

	let newRecipe = {}

	Object.keys(recipe)
	.forEach(key => {
		newRecipe[key] = recipe[key] * scale
	})

	return newRecipe
}
