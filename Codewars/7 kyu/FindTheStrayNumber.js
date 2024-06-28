/**
 * Se le da una matriz de enteros de longitud impar, en la que todos son iguales, excepto por un solo número.

Complete el método que acepta una matriz de este tipo y devuelve ese único número diferente.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
 */

// Mi solución

function stray(numbers) {
  let newNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      newNumber = numbers[i];
    }
  }

  return newNumber;
}
