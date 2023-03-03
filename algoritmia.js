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

/**
 * Verificar si es par o impar
 */

function verificarParOimpar(numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// refactorizada

function verificarParOimpar(numero) {
  return numero % 2 === 0;
}

/**
 * Calcular el área de un triángulo a partir de su base y altura.
 */

function calcularAreaTriangulo(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

/**
 * Pasar de grados Celsius a Fahrenheit.
 */

function deCelsiusAfahrenheit(gradosC) {
  let Fahrenheit = (gradosC * 9) / 5 + 32;
  return Fahrenheit;
}

/**
 * Determina si una cadena de texto contiene una subcadena determinada.
 */

function subCadenaEnCadena(cadena, subcadena) {
  return cadena.includes(subcadena);
}

/**
 * Programa que calcule la suma de los números pares entre 1 y 100.
 */

function sumaDeDosNumeroPares() {
  let suma = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }
  return suma;
}

/**
 * Función que tome un array de números como argumento y devuelva el número de elementos en el array que son mayores que 10.
 */

let arrayNum = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function elementosMayoresA(arrayNum, numero) {
  let nuevoArray = arrayNum.filter((e) => e > numero);
  return nuevoArray;
}

/**
 * Programa que convierta una cadena de texto en un array de palabras.
 */

function deStringAarray(string) {
  let arraySeparado = string.split("");
  return arraySeparado;
}

//Si se desea eliminar los espacios en blanco podria ser de la siguiente manera:

function deStringAarray(string) {
  let arraySeparado = string.trim().split(" ");
  return arraySeparado;
}

/**
 * función que tome dos números como argumentos y devuelva la suma de los dos números. Si los dos números son iguales, la función debe devolver el doble de la suma.
 */

function sumaODoble(num1, num2) {
  let suma = num1 + num2;
  if (num1 === num2) {
    return suma * 2;
  }
  return suma;
}

/**
 * función que tome un array de números como argumento y devuelva la suma de los números pares en el array.
 */

let arrayGeneral = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumaDeNumerosPares(array) {
  let pares = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares += array[i];
    }
  }
  return pares;
}
