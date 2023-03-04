/** Instructions

Given a year, report if it is a leap year.

The tricky thing here is that a leap year in the 
Gregorian calendar occurs:

on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400 */

// export const isLeap = year => {
// 	if (year % 400 === 0) {
// 		return true
// 	} else if (year % 100 === 0) {
// 		return false
// 	} else if (year % 4 === 0) {
// 		return true
// 	}
// 	return false
// }

export const isLeap = year => !(year % 100) ? !(year % 400) : !(year % 4);

/** Using the logical NOT (!) operator in JavaScript will return false if 
 * the operand is a truthy value, and true if the operand is a falsy value. 
 * 0 is considered falsy, while any other integer is truthy. */