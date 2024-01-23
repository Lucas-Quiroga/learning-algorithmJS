//INSTRUCCIONES

/*Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.
A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
 [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] 
Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

Nota: El carácter \n representa un salto de línea.

¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

Ah, y no modifiques (mutes) el array original.*/

//SOLUCIÓN

const gifts = ["cat", "game", "socks"];

function wrapping(gifts) {
  const wrapped = gifts.map((gift) => {
    const length = gift.length + 2;
    const stars = "*".repeat(length);
    return `${stars}\n*${gift}*\n${stars}`;
  });
  return wrapped;
}

//Explicación

// Este código JavaScript define una función llamada wrapping que toma un array de regalos y devuelve un nuevo array con cada regalo envuelto.

// La función wrapping utiliza el método map de los arrays para transformar cada elemento del array gifts. El método map crea un nuevo array con los resultados de la llamada a la función proporcionada en cada elemento del array original.

// Dentro de la función que se pasa a map, se calcula la longitud de cada regalo (que es una cadena de texto) y se le suma 2. Esta longitud se utiliza para generar una cadena de asteriscos (*) de la misma longitud utilizando el método repeat de las cadenas de texto.

// Luego, se utiliza una plantilla de cadena de texto para crear una representación de un regalo envuelto. Esta representación consiste en una línea de asteriscos, seguida de una línea con el regalo rodeado de asteriscos, y finalmente otra línea de asteriscos.

// Finalmente, la función wrapping devuelve el array wrapped que contiene todos los regalos envueltos.
