/**
 * La idea principal es contar todos los caracteres que aparecen en una cadena. Si tiene una cadena como , entonces el resultado debería ser .aba{'a': 2, 'b': 1}

¿Qué pasa si la cadena está vacía? Entonces el resultado debe ser un objeto literal vacío, .{}
 */

//My solution

function count(string) {
  // TODO
  if (string === "") {
    return {};
  }
  let newObj = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (newObj[char]) {
      newObj[char]++;
    } else {
      newObj[char] = 1;
    }
  }
  return newObj;
}
