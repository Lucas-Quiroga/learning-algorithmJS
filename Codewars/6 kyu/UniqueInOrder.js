/**
 * Implemente la función unique_in_order que toma como argumento una secuencia y devuelve una lista de elementos sin ningún elemento con el mismo valor uno al lado del otro y conservando el orden original de los elementos.

Por ejemplo:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

// Mi solución:
var uniqueInOrder = function (iterable) {
  let newArr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      newArr.push(iterable[i]);
    }
  }
  return newArr;
};
