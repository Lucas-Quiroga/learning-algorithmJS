/**
 * Task:
Dada una lista de números enteros, determine si la suma de sus elementos es par o impar.

Dé su respuesta como una coincidencia de cadena o ."odd""even"

Si la matriz de entrada está vacía, considérala como: (matriz con un cero).[0]

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
 */

//My solution
function oddOrEven(array) {
  //enter code here
  let newArrSum = 0;
  for (let i = 0; i < array.length; i++) {
    newArrSum += array[i];
  }
  return newArrSum % 2 === 0 ? "even" : "odd";
}
