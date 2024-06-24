/**
 * 
Count the smiley faces!

Dado un array (arr) como argumento, complete la función que debe devolver el número total de caras sonrientes. countSmileys

Reglas para una cara sonriente:

Cada cara sonriente debe contener un par de ojos válidos. Los ojos se pueden marcar como : or ;
Una cara sonriente puede tener nariz, pero no tiene por qué tenerla. Los caracteres válidos para una nariz son: - or ~
Cada cara sonriente debe tener una boca sonriente que debe estar marcada con cualquiera de las siguientes opciones: ) or D
No se permiten caracteres adicionales, excepto los mencionados.

Ejemplos válidos de caras sonrientes: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
En caso de una matriz vacía, retorna 0. No se probará con una entrada no válida (la entrada siempre será una matriz). El orden de los elementos de la cara (ojos, nariz, boca) siempre será el mismo.
 */

//My solution

function countSmileys(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let smilesValids = [
    ":)",
    ":-)",
    ":~)",
    ";)",
    ";-)",
    ";~)",
    ":D",
    ":-D",
    ":~D",
    ";D",
    ";-D",
    ";~D",
  ];

  let countSmiles = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < smilesValids.length; j++) {
      if (arr[i] === smilesValids[j]) {
        countSmiles++;
        break;
      }
    }
  }
  return countSmiles;
}
