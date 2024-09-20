/**
 * Dada una matriz no vacía de enteros, devuelve el resultado de multiplicar los valores en orden. Ejemplo:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

function grow(x) {
  let numFinal = 1;
  for (let i = 0; i < x.length; i++) {
    numFinal *= x[i];
  }
  return numFinal;
}
