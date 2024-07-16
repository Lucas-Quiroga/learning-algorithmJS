/**
 * Los estadounidenses son personas raras: en sus edificios, el primer piso es en realidad la planta baja y no hay un piso 13 (debido a la superstición).

Escriba una función que, dado un piso en el sistema americano, devuelva el piso en el sistema europeo.

Con la sustitución de la 1ª planta por la planta baja y la eliminación de la planta 13, los números bajan para ocupar su lugar. En el caso de estar por encima de 13, se mueven hacia abajo en dos porque hay dos números omitidos debajo de ellos.

Los sótanos (negativos) permanecen iguales que el nivel universal.

More information here

Examples
 */

//My solution

function getRealFloor(n) {
  if (n >= 15) return n - 2;
  if (n >= 13) return 12;
  if (n > 0) return n - 1;
  return n;
}
