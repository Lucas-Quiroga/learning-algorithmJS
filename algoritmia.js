//EJERCICIOS BÁSICOS JAVASCRIPT

/**
 * Sumar los elementos de un array:
 */

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumarArray(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

/**
 * Encontrar el número máximo en un array:
 */

function maximoNumArray(array) {
  let maximo = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximo) {
      maximo = array[i];
    }
  }
  return maximo;
}

/**
 * Encontrar el número mínimo en un array:
 */

function minimoNumArray(array) {
  let minimo = array[0];
  for (let index = 1; index < array.length; index++) {
    if (array[index] < minimo) {
      minimo = array[index];
    }
  }
  return minimo;
}

/**
 * Ordenar un array en orden ascendente:
 */

function ordenarArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        //si le cambiamos ">" por "<" sería de manera descendiente
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

/**
 * Verificar si una cadena es un palíndromo (es decir, si se lee igual de izquierda a derecha que de derecha a izquierda):
 */

function esPalindromo(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reversa = string.split("").reverse().join("");
  return string === reversa;
}

/**
 * Calcular la suma de los dígitos de un número:
 */

function sumarDigitos(numero) {
  let suma = 0;
  while (numero) {
    suma += numero % 10;
    numero = Math.floor(numero / 10);
  }
  return suma;
}

/**
 * Encontrar todos los números primos menores o iguales a un número dado:
 */

function numerosPrimos(numero) {
  let primos = [];
  for (let i = 2; i <= numero; i++) {
    let esPrimo = true;
    for (let x = 2; x <= Math.sqrt(i); x++) {
      if (i % x === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) {
      primos.push(i);
    }
  }
  return primos;
}

/**
 * Calcular el factorial de un número:
 */

function factorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}

/**
 * Invertir una cadena:
 */

function invertirString(string) {
  return string.split("").reverse().join("");
}

/**
 * Calcular la secuencia de Fibonacci hasta un número dado:
 */

function fibonacci(numero) {
  let fib = [0, 1];
  for (let i = 2; i <= numero; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, numero + 1);
}

/**
 * Encontrar el promedio de un arreglo de números:
 */

function promedioNumero(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma / array.length;
}

/**
 * Convertir una cadena de texto a título (cada palabra comienza con una letra mayúscula):
 */

function textoAtitulo(string) {
  let palabras = string.toLowerCase().split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
  }
  return palabras.join(" ");
}

/**
 * Verificar si una cadena contiene todas las letras del alfabeto:
 */

function verificarAbc(string) {
  string = string.toLowerCase();
  let alfabeto = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alfabeto.length; i++) {
    if (string.indexOf(alfabeto[i]) === -1) {
      return false;
    }
  }
  return true;
}
