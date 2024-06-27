/**
 * El objetivo de este ejercicio es convertir una cadena en una nueva cadena en la que cada carácter de la nueva cadena es "(" si ese carácter aparece solo una vez en la cadena original, o ")" si ese carácter aparece más de una vez en la cadena original. Ignore las mayúsculas y minúsculas al determinar si un carácter es un duplicado.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Es posible que los mensajes de aserción no sean claros sobre lo que muestran en algunos idiomas. Si lees "...It Should encode XXX", the "XXX" es el resultado esperado, no el insumo.
 */

// Mi solución

function duplicateEncode(word) {
  let wordToLower = word.toLowerCase();
  let objChar = {};
  //contamos cada caracter cuanto se repite
  for (let i = 0; i < wordToLower.length; i++) {
    let char = wordToLower[i];
    objChar[char] = (objChar[char] || 0) + 1;
  }

  //asignamos los valores finales
  let stringFinal = "";
  for (let i = 0; i < wordToLower.length; i++) {
    let char = wordToLower[i];
    if (objChar[char] === 1) {
      stringFinal += "(";
    } else {
      stringFinal += ")";
    }
  }
  return stringFinal;
}
