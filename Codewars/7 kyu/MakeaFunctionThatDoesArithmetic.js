/**
 * Dados dos números y un operador aritmético (el nombre del mismo, como una cadena), devuelve el resultado de los dos números que tienen ese operador utilizado en ellos.

a y b ambos serán enteros positivos, y a siempre será el primer número de la operación, y b siempre el segundo.

Los cuatro operadores son "sumar", "restar", "dividir", "multiplicar".

Unos pocos examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5

mi solucion:
 */

function arithmetic(a, b, operator) {
  //your code here!
  switch (operator) {
    case "add":
      return a + b;
      break;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}
