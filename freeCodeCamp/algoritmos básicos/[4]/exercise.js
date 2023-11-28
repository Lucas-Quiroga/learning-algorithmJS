// Encuentra la palabra más larga en una cadena
// Devuelve la longitud de la palabra más larga en la oración proporcionada.

// Tu respuesta debe ser un número.

function findLongestWordLength(str) {
  // Dividir la cadena en palabras
  let palabras = str.split(" ");

  // Inicializar la longitud máxima
  let longitudMaxima = 0;

  // Iterar sobre cada palabra
  for (let i = 0; i < palabras.length; i++) {
    // Actualizar la longitud máxima si encontramos una palabra más larga
    if (palabras[i].length > longitudMaxima) {
      longitudMaxima = palabras[i].length;
    }
  }

  // Devolver la longitud máxima encontrada
  return longitudMaxima;
}

// Ejemplo de uso
const resultado = findLongestWordLength(
  "The quick brown fox jumped over the lazy dog"
);
console.log(resultado); //6
