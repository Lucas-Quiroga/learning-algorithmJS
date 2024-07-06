/**
 * Build Tower
Construya una torre en forma de pirámide, como una matriz/lista de cadenas, dado un entero positivo number of floors. Un bloque de torres se representa con "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
 */

// Mi solución:

function towerBuilder(nFloors) {
  const tower = [];

  for (let i = 0; i < nFloors; i++) {
    let espaciosVacios = " ".repeat(nFloors - i - 1);
    let estrellas = "*".repeat(2 * i + 1);
    let piso = espaciosVacios + estrellas + espaciosVacios;
    tower.push(piso);
  }
  return tower;
}
