/**
 * Tu objetivo en este kata es implementar una función de diferencia, que resta una lista de otra y devuelve el resultado.

Debería eliminar todos los valores de la lista a, que están presentes en la lista b mantener su orden.

arrayDiff([1,2],[1]) == [2]
Yof a value is present in b, Todas sus ocurrencias deben ser eliminadas de las otras:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

// Solución:
function arrayDiff(a, b) {
  if (b.length === 0) {
    return a;
  }
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      newArr.push(a[i]);
    }
  }

  return newArr;
}
