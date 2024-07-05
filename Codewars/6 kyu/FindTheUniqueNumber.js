/**
 * Hay una matriz con algunos números. Todos los números son iguales excepto uno. ¡Intenta encontrarlo!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
Se garantiza que la matriz contiene al menos 3 números.

Las pruebas contienen algunas matrices muy grandes, así que piense en el rendimiento.
 */

// Mi solución:

function findUniq(arr) {
  let numberDistinto = 0;
  for (let i = 0; i < arr.length; i++) {
    let numberI = arr[i];
    if (arr.indexOf(numberI) === arr.lastIndexOf(numberI)) {
      numberDistinto = numberI;
      break;
    }
  }
  return numberDistinto;
}
