const ALLERGENS = {
	eggs: 1,

	peanuts: 2,

	shellfish: 4,

	strawberries: 8,

	tomatoes: 16,

	chocolate: 32,

	pollen: 64,

	cats: 128,
}

export class Allergies {
	constructor(score) {
		this.score = score
	}

	list() {
		return Object.keys(ALLERGENS).filter(allergy =>
			this.allergicTo(allergy)
		)
	}

	/**
	 * Si el resultado de la operación AND es diferente de cero, significa que 
   * la persona es alérgica a ese alérgeno, y el método devuelve true. Si el 
   * resultado de la operación AND es cero, significa que la persona no es 
   * alérgica a ese alérgeno, y el método devuelve false.
	 */
	allergicTo(allergy) {
		return !!(this.score & ALLERGENS[allergy])
	}
}

/* El operador !! se utiliza para convertir un valor en su equivalente booleano. 
Esencialmente, se utiliza dos veces seguidas para forzar la conversión de un 
valor a un booleano y obtener un resultado booleano explícito.

Cuando se aplica el operador !! a un valor, la primera negación (!) convierte el 
valor en su opuesto booleano y la segunda negación (!) invierte nuevamente el 
resultado obteniendo el booleano equivalente al valor original.

Por ejemplo: */

const value = 0;
const booleanValue = !!value;
console.log(booleanValue); // false

/* En el ejemplo anterior, value es igual a 0. Al aplicar el operador !! a value, 
se convierte en su opuesto booleano (false) y luego se invierte nuevamente, 
obteniendo true.

En el contexto del método allergicTo que proporcionaste, el operador !! se 
utiliza para convertir el resultado numérico de la operación bitwise en un 
valor booleano. Si el resultado de la operación bitwise AND es diferente de 
cero, !! lo convertirá en true. Si el resultado es cero, !! lo convertirá en 
false. */


return !!(this.score & ALLERGENS[allergy]);

/* En resumen, el operador !! se utiliza para obtener un valor booleano 
explícito a partir de cualquier valor, permitiendo evaluarlo o utilizarlo en 
contextos que requieren expresiones booleanas.*/

export class Allergies {
	constructor(allergyScore) {
		this.allergyScore = allergyScore
	}

	list() {
		return [
			'eggs',

			'peanuts',

			'shellfish',

			'strawberries',

			'tomatoes',

			'chocolate',

			'pollen',

			'cats',
		].filter((_item, i) => this.allergyScore & (2 ** i))
	}

	allergicTo(item) {
		return this.list().includes(item)
	}
}

const ALLERGENT_SCORE_MAP = {
	eggs: 1,

	peanuts: 2,

	shellfish: 4,

	strawberries: 8,

	tomatoes: 16,

	chocolate: 32,

	pollen: 64,

	cats: 128,
}

const ALLERGIES = Object.keys(ALLERGENT_SCORE_MAP)

export class Allergies {
	constructor(allergyScore) {
		this.allergyScore = allergyScore
	}

	list() {
		return ALLERGIES.filter(this.allergicTo.bind(this)) //passing fn looses this hence the bind
	}

	allergicTo(allergent) {
		return Boolean(this.allergyScore & ALLERGENT_SCORE_MAP[allergent])
	}
}

const ITEMS = [
	'eggs',

	'peanuts',

	'shellfish',

	'strawberries',

	'tomatoes',

	'chocolate',

	'pollen',

	'cats',
]

export class Allergies {
	constructor(score) {
		this.score = score
	}

	list() {
		return ITEMS.filter((_, i) => this.score & (1 << i))
	}

	allergicTo(item) {
		return this.list().includes(item)
	}
}

/* En JavaScript, el operador `<<` es el operador de desplazamiento a la izquierda. 
Se utiliza para desplazar los bits de un número hacia la izquierda.

La expresión `(1 << i)` toma el número 1 y lo desplaza hacia la izquierda `i` veces, 
donde `i` es un número entero no negativo. Cada desplazamiento hacia la izquierda 
equivale a multiplicar el número por 2.

Aquí hay algunos ejemplos para ilustrar cómo funciona:*/

console.log(1 << 0);  // 1 (1 desplazado 0 veces es igual a 1)
console.log(1 << 1);  // 2 (1 desplazado 1 vez es igual a 2)
console.log(1 << 2);  // 4 (1 desplazado 2 veces es igual a 4)
console.log(1 << 3);  // 8 (1 desplazado 3 veces es igual a 8)
console.log(1 << 4);  // 16 (1 desplazado 4 veces es igual a 16)

/* En cada caso, el número 1 se desplaza hacia la izquierda el número de veces indicado por `i`, 
y el resultado es el valor resultante después del desplazamiento.

En el contexto del código que proporcionaste, el desplazamiento a la izquierda se utiliza para 
generar valores únicos asociados a cada alérgeno en el objeto `ALLERGENS`. Cada alérgeno tiene 
un valor numérico que es una potencia de 2, lo que significa que cada alérgeno tiene un único 
bit activo en su representación binaria. Al utilizar el operador `<<` con un índice `i`, se desplaza 
el bit activo hacia la posición `i` dentro del número resultante. Esto permite asignar valores 
únicos y distintos para cada alérgeno dentro del objeto `ALLERGENS`. */

const ALLERGIE_SCORES = {
	eggs: 1,

	peanuts: 2,

	shellfish: 4,

	strawberries: 8,

	tomatoes: 16,

	chocolate: 32,

	pollen: 64,

	cats: 128,
}

export class Allergies {
	constructor(value) {
		this.value = value

		this.allergies = Object.keys(ALLERGIE_SCORES).filter(
			allergen => value & ALLERGIE_SCORES[allergen]
		)
	}

	list() {
		return this.allergies
	}

	allergicTo(allergen) {
		return this.allergies.includes(allergen)
	}
}