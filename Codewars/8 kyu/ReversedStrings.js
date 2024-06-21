/**
 * Complete the solution so that it reverses the string passed into it.
 *
 * 'world'  =>  'dlrow'
 *
 * mi solucion:
 *
 */

function solution(str) {
  let reverseArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverseArr.push(str[i]);
  }
  return reverseArr.join("");
}
