/**
 * Take 2 strings s1 and s2 incluyendo solo las cartas de a to z. Return a new Cadena ordenada, la más larga posible, que contiene letras distintas, cada una tomada solo una vez, provenientes de S1 o S2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */

// My solution

function longest(s1, s2) {
  // your code
  const combinados = s1 + s2;
  const abecedario = new Set("abcdefghijklmnopqrstuvwxyz");
  const s1Filtrado = [...combinados].filter((elem) => abecedario.has(elem));
  const uniquedFiltrado = new Set(s1Filtrado);
  const sorted = [...uniquedFiltrado].sort();
  const joinArr = sorted.join("");

  return joinArr;
}
