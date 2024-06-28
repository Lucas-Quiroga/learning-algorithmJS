/**
 * Complete la solución para que devuelva true si el primer argumento (cadena) pasado termina con el segundo argumento (también una cadena).

Ejemplos:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
 */

function solution(str, ending) {
  if (ending === "") {
    return true;
  }
  return str.slice(-ending.length) === ending;
}

// tambien se podia hacer con endsWith de la siguiente manera

function solution(str, ending) {
  return str.endsWith(ending);
}
