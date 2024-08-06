/**
 * siempre dice, "x años", donde x es un número aleatorio entre 0 y 9.

Escriba un programa que devuelva la edad de la niña (0-9) como un número entero.

Supongamos que la cadena de entrada de prueba siempre es una cadena válida. Por ejemplo, la entrada de la prueba puede ser "1 año" o "5 años". El primer carácter de la cadena es siempre un número.
 */

// mi solucion
function getAge(inputString) {
  let inputSplit = inputString.split(" ");
  return Number(inputSplit[0]);
}
