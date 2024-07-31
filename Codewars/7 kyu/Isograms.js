/**
 * Un isograma es una palabra que no tiene letras repetidas, consecutivas o no consecutivas. Implemente una función que determine si una cadena que contiene solo letras es un isograma. Supongamos que la cadena vacía es un isograma. Ignorar mayúsculas y minúsculas.

Ejemplo: (entrada --> salida)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
 */

// mi solucion

function isIsogram(str) {
  let splitStr = str.toLowerCase().split("");
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr.indexOf(splitStr[i]) !== splitStr.lastIndexOf(splitStr[i])) {
      return false;
    }
  }
  return true;
}
