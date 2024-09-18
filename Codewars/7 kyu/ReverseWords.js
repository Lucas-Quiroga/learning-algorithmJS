/**
 * Complete la función que acepta un parámetro de cadena e invierte cada palabra de la cadena. Se deben conservar todos los espacios de la cadena.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

//otra forma con for

function reverseWords(str) {
  let arr = str.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].split("").reverse().join(""));
  }
  return result.join(" ");
}
