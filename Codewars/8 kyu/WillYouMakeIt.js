/**
 * Estabas acampando con tus amigos lejos de casa, pero cuando llega el momento de volver, te das cuenta de que se te está acabando el combustible y el surtidor más cercano está 50 ¡Km! Sabes que, en promedio, tu auto funciona con 25 millas por galón. Hay 2 galones restantes.

Teniendo en cuenta estos factores, escribe una función que te diga si es posible llegar a la bomba o no.

La función debe devolver true si es posible y false if not.

mi solucion:
 */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return mpg * fuelLeft >= distanceToPump ? true : false;
};
