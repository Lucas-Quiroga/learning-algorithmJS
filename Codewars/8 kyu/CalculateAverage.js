/**
 * Escriba una función que calcule el promedio de los números en una lista dada.

Nota: Las matrices vacías deben devolver 0.
 */

// My solution
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}
