//INSTRUCCIONES

// Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

// Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

// Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.

// const packOfGifts = ["book", "doll", "ball"]
// const reindeers = ["dasher", "dancer"]

// // el pack de regalos pesa 4 + 4 + 4 = 12
// // los renos pueden llevar (2 * 6) + (2 * 6) = 24
// // por lo tanto, Santa Claus puede entregar 2 cajas de regalos

// distributeGifts(packOfGifts, reindeers) // 2
// Cosas a tener en cuenta:

// Las cajas de regalos no se pueden dividir.
// Los nombres de los regalos y los renos siempre serán mayores que 0.

// RESPUESTA

function distributeGifts(packOfGifts, reindeers) {
  const pesoDeLosRegalos = packOfGifts.reduce(
    (acc, gift) => acc + gift.length,
    0
  );
  const pesoDeLosRenos = reindeers.reduce(
    (acc, reno) => acc + reno.length * 2,
    0
  );

  return Math.floor(pesoDeLosRenos / pesoDeLosRegalos);
}

// Explicacion:

// Este código JavaScript define una función llamada distributeGifts que calcula el número máximo de cajas de regalos que Santa Claus puede entregar a los niños. La función toma dos argumentos: packOfGifts, que es un array de cadenas de texto que representan los regalos, y reindeers, que es un array de cadenas de texto que representan los renos.

// Primero, la función distributeGifts calcula el peso total de los regalos. Para ello, utiliza el método reduce de los arrays. El método reduce aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor. En este caso, la función que se pasa a reduce suma la longitud de cada regalo (que es una cadena de texto) al acumulador.

// A continuación, la función distributeGifts calcula el peso total que pueden llevar los renos. Para ello, utiliza de nuevo el método reduce. En este caso, la función que se pasa a reduce suma el doble de la longitud de cada reno al acumulador.

// Finalmente, la función distributeGifts devuelve el número máximo de cajas de regalos que Santa Claus puede entregar. Este número se calcula dividiendo el peso total que pueden llevar los renos entre el peso total de los regalos, y redondeando hacia abajo el resultado utilizando la función Math.floor. Esto se debe a que las cajas de regalos no se pueden dividir.
