/**
 * Dada una matriz de números enteros, encuentre el que aparece un número impar de veces.

Siempre habrá un solo número entero que aparezca un número impar de veces.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 */

// Solución:

function findOdd(A) {
  //inicializamos el obj para buscar las coincidencias
  let objCountNumber = {};
  let valueDeObj = 0;
  for (let i = 0; i < A.length; i++) {
    let indexN = A[i];
    objCountNumber[indexN] = (objCountNumber[indexN] || 0) + 1;
  }

  for (const key in objCountNumber) {
    if (objCountNumber.hasOwnProperty(key)) {
      const value = objCountNumber[key];
      if (value % 2 !== 0) {
        valueDeObj = Number(key);
        break;
      }
    }
  }
  return valueDeObj;
}
