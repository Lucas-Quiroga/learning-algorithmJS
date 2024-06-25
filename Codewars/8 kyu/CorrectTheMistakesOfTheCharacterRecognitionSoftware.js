/**
 * El software de reconocimiento de caracteres se utiliza ampliamente para digitalizar textos impresos. De este modo, los textos pueden ser editados, buscados y almacenados en un ordenador.

Cuando los documentos (especialmente los más antiguos escritos con una máquina de escribir) se digitalizan, los softwares de reconocimiento de caracteres a menudo cometen errores.

Su tarea es corregir los errores en el texto digitalizado. Solo tienes que manejar los siguientes errores:

S se interpreta erróneamente como 5
O se interpreta erróneamente como 0
I se interpreta erróneamente como 1
Los casos de prueba contienen números solo por error.
 */

//My solution

function correct(string) {
  // your code here
  let newString = string.split("");
  for (let i = 0; i < newString.length; i++) {
    newString[i] = newString[i]
      .replace("0", "O")
      .replace("5", "S")
      .replace("1", "I");
  }
  return newString.join("");
}
