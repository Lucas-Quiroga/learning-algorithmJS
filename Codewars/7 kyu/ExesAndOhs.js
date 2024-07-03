/**
 * Compruebe si una cadena tiene la misma cantidad de 'x' y 'o'. El método debe devolver un valor booleano y no distinguir entre mayúsculas y minúsculas. La cadena puede contener cualquier carácter.

Ejemplos de entrada/salida:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

// My solution

function XO(str) {
  const toLowerCaseStr = str.toLowerCase();
  let currentX = 0;
  let currentO = 0;
  for (let i = 0; i < toLowerCaseStr.length; i++) {
    if (toLowerCaseStr[i] === "x") currentX++;
    if (toLowerCaseStr[i] === "o") currentO++;
  }

  return currentX === currentO ? true : false;
}
