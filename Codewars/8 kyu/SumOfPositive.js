/**
 * You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Nota: si no hay nada que sumar, la suma se establece de forma predeterminada en 0.
 */

// Mi solucion

function positiveSum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let arrPos = [];
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arrPos.push(arr[i]);
    }
  }
  for (let i = 0; i < arrPos.length; i++) {
    suma += arrPos[i];
  }
  return suma;
}
