/**
 * Cree una función con dos argumentos que devolverá una matriz del primero n múltiplos de x.

Suponga que tanto el número dado como el número de veces que se debe contar serán números positivos mayores que 0.

Devuelve los resultados como una matriz o lista ( dependiendo del idioma ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
 */

// My solution

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
