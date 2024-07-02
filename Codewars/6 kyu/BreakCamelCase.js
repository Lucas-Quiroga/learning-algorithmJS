/**
 * Complete la solución de modo que la función rompa la carcasa del camello, usando un espacio entre las palabras.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

// My solution

function solution(string) {
  if (string === "") {
    return "";
  }

  let splitString = string.split("");
  console.log(splitString);
  let newString = "";
  //cada vez que se tope con una Mayuscula, lo separe " "
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === splitString[i].toUpperCase() && i !== 0) {
      newString += " " + splitString[i];
    } else {
      newString += splitString[i];
    }
  }
  return newString;
}
