/** Instructions

Your task is to determine the date and time one gigasecond after a certain date.

A gigasecond is one thousand million seconds. That is a one with nine zeros after it.

If you were born on January 24th, 2015 at 22:00 (10:00:00pm), then you would be a 
gigasecond old on October 2nd, 2046 at 23:46:40 (11:46:40pm).
Notes

The input and output of the gigasecond function is of type Date.

It is possible to return a correct value for this exercise by mutating the solution 
function argument. Although there are legitimate use cases for mutating function 
arguments, this is usually undesirable, and in the case of this exercise, clearly 
unexpected. For this reason, the test suite has a test that fails in case the argument 
has been modified after the function execution.*/

export const gigasecond = date => {
	console.log(date)
	// Convierte la fecha de partida a milisegundos desde el 1 de enero de 1970 (Unix timestamp)
	const startingTimestamp = date.getTime()
	console.log(startingTimestamp)

	// Calcula el timestamp de una gigasegundo después de la fecha de partida
	const gigasecondLaterTimestamp = startingTimestamp + 1000000000 * 1000
	console.log(gigasecondLaterTimestamp)

	// Crea un nuevo objeto Date a partir del timestamp calculado
	const gigasecondLaterDate = new Date(gigasecondLaterTimestamp)
	console.log(gigasecondLaterDate)

	return gigasecondLaterDate
}

// one line solution O_O

export const gigasecond = input => new Date(Number(input) + 10e11)

// 10e11 = 10*10^11

/** I found out about Number() when reading about using the unary+ operator
 * to do the conversion. Internally, it calls Number() function (sort of).
 * So you could do this and it is equivalent: */

export const gigasecond = date => new Date(+date + 1e12)

// unary+ operator here: https://www.javascripttutorial.net/javascript-unary-operators/

/**  Floating-point values can be represented using e-notation.

E-notation indicates a number that should be multiplied by 10 raised to a given power.

The format of e-notation in Javascript is to have a number, integer or 
floating-point, followed by e or E, than by the power of 10 to multiply by.

Example

Consider the following: */

var floatNum = 3.125e7 //equal to 31250000000
console.log(floatNum)

/* In this example, floatNum is equal to 31,250,000. The notation essentially 
says, "Take 3.125 and multiply it by 10 7."  */

const GIGASECOND = 1e12

export const gigasecond = date => {
	return new Date(date.getTime() + GIGASECOND)
}

export const gigasecond = (date) => {    
  const GIGASECONDS = Math.pow(10, 9);
  const toMilliseconds = (seconds) => { return seconds * 1000; };

  return new Date(date.getTime() + toMilliseconds(GIGASECONDS))
}