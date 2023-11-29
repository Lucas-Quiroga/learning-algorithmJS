// Confirma el final
// Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

// Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015. Pero para el propósito de este desafío, nos gustaría que usaras uno de los métodos de subcadena de JavaScript en su lugar.

function confirmEnding(str, target) {
  // La expresión str.slice(str.length - target.length) extrae una subcadena de los últimos caracteres de str
  // str.length representa la longitud total de str y target.length representa la longitud de la subcadena target
  // Entonces, str.slice(str.length - target.length) obtiene los últimos caracteres de str de una longitud igual a la de target
  // Luego, se compara esa subcadena recién creada con la cadena target
  // Si son iguales, significa que str termina con target

  return str.slice(str.length - target.length) === target;
  // Esta condición verifica si str termina con target
  // Si es verdadero, se ejecuta el código dentro de este bloque
}

confirmEnding("Bastian", "n");
