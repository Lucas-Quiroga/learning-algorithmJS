/**
 * Dado un conjunto de números, devuelve el inverso aditivo de cada uno. Cada positivo se convierte en negativo, y lo negativo se convierte en positivo.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

    mi solucion:
 */

function invert(array) {
  let arr = array.map((e) => -e);
  console.log(arr);
  return arr;
}
