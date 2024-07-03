/**
 * Función de escritura RemoveExclamationMarks que elimina todos los signos de exclamación de una cadena determinada.
 */

// My solution

function removeExclamationMarks(s) {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      newString += s[i];
    }
  }
  return newString;
}
