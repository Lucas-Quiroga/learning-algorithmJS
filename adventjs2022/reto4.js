// INSTRUCCIONES:

// Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.

// Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).

// Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.

// Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:

// fitsInOneBox([
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 }
// ]) // true
// En el ejemplo anterior, la caja más pequeña entra en la caja más grande. Por lo tanto, es posible empaquetar todas las cajas en una sola. Ahora veamos un caso que no:

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 },
//   { l: 3, w: 1, h: 3 }
// ]

// fitsInOneBox(boxes) // false
// En el ejemplo anterior, la caja más pequeña entra en la caja del medio, pero la caja del medio no entra en la caja más grande. Por lo tanto, no es posible empaquetar todas las cajas en una sola.

// Ten en cuenta que las cajas pueden no venir en orden:

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 3, w: 3, h: 3 },
//   { l: 2, w: 2, h: 2 }
// ]

// fitsInOneBox(boxes) // true
// En el ejemplo anterior, la primer caja cabe en la tercera, y la tercera en la segunda. Por lo tanto, es posible empaquetar todas las cajas en una sola.

// Cosas a tener en cuenta:

// Las cajas no se pueden rotar ya que los elfos nos han dicho que la máquina no está preparada.
// Las cajas pueden venir desordenadas de tamaño.
// Las cajas no son siempre cuadradas, pueden ser rectangulares.

// RESPUESTA

function fitsInOneBox(boxes) {
  const boxesSorted = boxes.sort((a, b) => {
    return a.l * a.w * a.h - b.l * b.w * b.h;
  });

  for (let i = 0; i < boxesSorted.length - 1; i++) {
    const box1 = boxesSorted[i];
    const box2 = boxesSorted[i + 1];

    if (
      box1.l >= box2.l ||
      box1.w >= box2.w ||
      box1.h >= box2.h ||
      (box1.l === box2.l && box1.w === box2.w && box1.h === box2.h)
    ) {
      return false;
    }
  }

  return true;
}

// Explicacion:

// Este código JavaScript define una función llamada fitsInOneBox que determina si cada caja en un array de cajas puede caber dentro de la siguiente caja más grande. La función toma un argumento: boxes, que es un array de objetos que representan las cajas. Cada objeto tiene tres propiedades: l (longitud), w (ancho) y h (altura).

// Primero, la función fitsInOneBox ordena el array boxes de menor a mayor volumen. Para ello, utiliza el método sort de los arrays. El método sort ordena los elementos de un array en su lugar y devuelve el array. En este caso, la función que se pasa a sort calcula el volumen de cada caja (que es el producto de su longitud, ancho y altura) y devuelve la diferencia entre los volúmenes de las dos cajas que se están comparando.

// A continuación, la función fitsInOneBox recorre el array boxesSorted con un bucle for. En cada iteración del bucle, se comparan dos cajas consecutivas: la caja actual y la siguiente.

// Dentro del bucle, si la longitud, el ancho o la altura de la caja actual es mayor o igual que la de la siguiente caja, o si las dimensiones de las dos cajas son exactamente iguales, la función fitsInOneBox devuelve false y termina. Esto se debe a que, en cualquiera de estos casos, la caja actual no puede caber dentro de la siguiente caja.

// Si el bucle termina sin encontrar ninguna pareja de cajas donde la caja actual no pueda caber dentro de la siguiente, la función fitsInOneBox devuelve true. Esto significa que cada caja puede caber dentro de la siguiente caja más grande.
