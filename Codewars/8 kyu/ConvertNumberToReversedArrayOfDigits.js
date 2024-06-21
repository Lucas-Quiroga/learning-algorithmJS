/**
 * Convert number to reversed array of digits
Dado un número aleatorio no negativo, debe devolver los dígitos de este número dentro de una matriz en orden inverso.

Example(Input => Output):

348597 => [7,9,5,8,4,3]
 */

// mi respuesta

function digitize(n) {
  const arrayDeCaracteres = n.toString().split("").reverse();

  return arrayDeCaracteres.map((x) => parseInt(x));
}
