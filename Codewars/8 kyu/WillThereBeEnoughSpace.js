/**
 * La historia:
Bob trabaja como conductor de autobús. Sin embargo, se ha vuelto extremadamente popular entre los residentes de la ciudad. Con tantos pasajeros que quieren subir a su autobús, a veces tiene que enfrentarse al problema de que no queda suficiente espacio en el autobús. Quiere que escribas un programa simple que le diga si podrá acomodar a todos los pasajeros.

Descripción general de la tarea:
Tienes que escribir una función que acepte tres parámetros:

cap es la cantidad de personas que puede albergar el autobús, excluyendo al conductor.
on es el número de personas en el autobús, excluyendo al conductor.
wait es el número de personas que esperan para subir al autobús, excluyendo al conductor.
Si hay suficiente espacio, devuelve 0, y si no lo hay, devuelve el número de pasajeros que no puede llevar.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
 */

// My solution

function enough(cap, on, wait) {
  let asientosDisponibles = cap - on;
  let pasajerosQueNoEntran = wait - asientosDisponibles;
  if (asientosDisponibles > wait) {
    return 0;
  } else {
    return pasajerosQueNoEntran;
  }
}
