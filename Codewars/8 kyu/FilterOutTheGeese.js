/**
 * Escriba una función que tome una lista de cadenas como argumento y devuelva una lista filtrada que contenga los mismos elementos pero con los 'geese' eliminados.

Los geese son cualquier cadena de la siguiente matriz, que se rellena previamente en la solución:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
Por ejemplo, si esta matriz se pasara como argumento:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
La función devolvería la siguiente matriz:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
Los elementos de la matriz devuelta deben estar en el mismo orden que en la matriz inicial pasada a la función, aunque sin los 'geese'. Tenga en cuenta que todas las cadenas estarán en el mismo caso que las proporcionadas, y algunos elementos pueden repetirse.
 */

// Mi solución

function gooseFilter(birds) {
  let geese = new Set([
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ]);
  return birds.filter((bird) => !geese.has(bird));
}
