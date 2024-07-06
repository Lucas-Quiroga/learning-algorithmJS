/**
 * Ejemplo: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
 */

// Mi solución:

function sumStr(a, b) {
  let parseA = parseInt(a) || 0;
  let parseB = parseInt(b) || 0;
  let sum = parseA + parseB;
  return sum.toString();
}
