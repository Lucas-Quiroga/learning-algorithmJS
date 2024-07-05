/**
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
 */

// Mi solución:

function validatePIN(pin) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let pinSplit = pin.split("");
  let newString = "";

  // si pinSplit contiene algun caracter que no sea un número, retorna false
  for (let i = 0; i < pinSplit.length; i++) {
    if (!numbers.includes(pinSplit[i])) {
      return false;
    }
  }

  for (let i = 0; i < pinSplit.length; i++) {
    if (numbers.includes(pinSplit[i])) {
      newString += pinSplit[i];
    }
  }

  return newString.length === 4 || newString.length === 6;
}
