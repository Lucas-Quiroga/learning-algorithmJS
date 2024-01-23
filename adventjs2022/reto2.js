//EXPLICACIÓN

// Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.

// Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.

// Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

// Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:

// const year = 2022
// const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// // 01/06 es el 6 de enero, jueves. Cuenta.
// // 04/01 es el 1 de abril, un viernes. Cuenta.
// // 12/25 es el 25 de diciembre, un domingo. No cuenta.

// countHours(year, holidays) // 2 días -> 4 horas extra en el año
// Cosas a tener en cuenta y consejos:

// El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
// Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
// El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.

// RESPUESTA

function countHours(year, holidays) {
  const holidaysDate = holidays.map((holiday) => {
    const [month, day] = holiday.split("/");
    return new Date(year, month - 1, day);
  });

  const extraHours = holidaysDate.filter((date) => {
    const day = date.getDay();
    return day >= 1 && day <= 5;
  });

  return extraHours.length * 2;
}

//Explicacion:

// Este código JavaScript define una función llamada countHours que calcula el número de horas extra que se deben trabajar en un año dado, teniendo en cuenta los días festivos. La función toma dos argumentos: year, que es el año en el que se calculan las horas extra, y holidays, que es un array de cadenas de texto que representan las fechas de los días festivos en el formato "mes/día".

// Primero, la función countHours transforma el array holidays en un array de objetos Date que representan las fechas de los días festivos. Para ello, utiliza el método map de los arrays. Dentro de la función que se pasa a map, se divide cada cadena de texto de holidays en el mes y el día utilizando el método split, y luego se crea un nuevo objeto Date con el año, el mes y el día correspondientes.

// A continuación, la función countHours filtra el array de fechas de los días festivos para quedarse solo con las que caen en días laborables (de lunes a viernes). Para ello, utiliza el método filter de los arrays. Dentro de la función que se pasa a filter, se obtiene el día de la semana de cada fecha utilizando el método getDay de los objetos Date, y se comprueba si este día está entre 1 y 5 (donde 1 es lunes y 5 es viernes).

// Finalmente, la función countHours devuelve el número de horas extra que se deben trabajar. Este número se calcula multiplicando el número de días festivos que caen en días laborables (que es la longitud del array extraHours) por 2.
