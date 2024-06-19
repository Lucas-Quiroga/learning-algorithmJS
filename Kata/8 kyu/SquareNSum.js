// Completa la función de suma cuadrada de modo que eleve al cuadrado cada número que se le pase y luego sume los resultados.

// For example, for [1, 2, 2] it should return 9 because
// 1*2+2*2+2*2=9.

// Mi respuesta:

function squareSum(numbers) {
  let aux = [];
  let sumTotal = 0;

  for (let i = 0; i < numbers.length; i++) {
    aux.push(numbers[i] ** 2);
  }
  for (let j = 0; j < aux.length; j++) {
    sumTotal += aux[j];
  }
  return sumTotal;
}
