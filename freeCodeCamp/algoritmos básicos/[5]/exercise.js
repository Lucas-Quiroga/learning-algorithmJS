// Devuelve los números mayores en los arreglos
// Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.

// Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder a cada miembro del arreglo con la sintaxis arr[i].

function mayoresDeCadaArreglo(arr) {
  // Creamos un nuevo arreglo para almacenar los mayores números
  let arrayConMayorNumero = [];

  // Iteramos a través de cada subarreglo
  for (let i = 0; i < arr.length; i++) {
    // Inicializamos la variable para almacenar el mayor número con el primer número del subarreglo
    let mayorNumero = arr[i][0];

    // Iteramos a través de los números restantes en el subarreglo
    for (let j = 1; j < arr[i].length; j++) {
      // Comparamos cada número con el actual mayorNumero
      if (arr[i][j] > mayorNumero) {
        // Si encontramos un número mayor, lo actualizamos
        mayorNumero = arr[i][j];
      }
    }

    // Agregamos el mayor número del subarreglo al nuevo arreglo
    arrayConMayorNumero.push(mayorNumero);
  }

  // Devolvemos el arreglo con los mayores números de cada subarreglo
  return arrayConMayorNumero;
}

// Ejemplo de uso
const resultado = mayoresDeCadaArreglo([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

console.log(resultado); // Esto imprimirá [5, 27, 39, 1001], que son los mayores números de cada subarreglo.
