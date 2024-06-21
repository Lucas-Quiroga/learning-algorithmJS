/**
 * Dada una cadena de palabras, debe encontrar la palabra con la puntuación más alta.

Cada letra de una palabra suma puntos según su posición en el alfabeto: etc.a = 1, b = 2, c = 3

Por ejemplo, la puntuación de es (1 + 2 + 1 + 4).abad8

Debe devolver la palabra con la puntuación más alta como una cadena.

Si dos palabras puntúan igual, devuelve la palabra que aparece antes en la cadena original.

Todas las letras estarán en minúsculas y todas las entradas serán válidas.

mi solucion:
 */

function high(x) {
  let wordArray = x.split(" ");
  let alphaScore = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let highestScore = 0;
  let highestWord = "";

  for (let i = 0; i < wordArray.length; i++) {
    let currentWord = wordArray[i];
    let currentScore = 0;

    for (let j = 0; j < currentWord.length; j++) {
      currentScore += alphaScore[currentWord[j]];
    }

    if (currentScore > highestScore) {
      highestScore = currentScore;
      highestWord = currentWord;
    }
  }

  return highestWord;
}
