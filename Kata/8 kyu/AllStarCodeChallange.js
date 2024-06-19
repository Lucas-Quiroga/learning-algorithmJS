/**
 * Cree una función que acepte una cadena y un solo carácter, y devuelva un número entero del recuento de ocurrencias en las que se encuentra el segundo argumento en el primero.

Si no se puede encontrar ninguna ocurrencia, se debe devolver un recuento de.0

("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0
 */

// mi respuesta

function strCount(str, letter) {
  //code here
  let count = 0;
  let separatedCharters = str.split("");
  for (let i = 0; i < separatedCharters.length; i++) {
    if (separatedCharters[i] === letter) {
      count++;
    }
  }
  return count;
}
