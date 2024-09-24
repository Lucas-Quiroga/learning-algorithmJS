/**
 * Dado un conjunto de números enteros como cadenas y números, devuelve la suma de los valores de los valores de los conjuntos como si todos fueran números.

Devuelve tu respuesta como un número.
 */

// Mi solución

function sumMix(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return sum;
}
