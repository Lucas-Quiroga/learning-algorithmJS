// Cree una función llamada para eliminar las vocales minúsculas (a,e ,i ,o ,u ) en una cadena dada y devolver la nueva cadena.

// example 1: "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"
// example 2: "No offense but,\nYour writing is among the worst I've ever read" => "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"

function shortcut(string) {
  const vcsMin = ["a", "e", "i", "o", "u"];
  let newLetter = "";
  for (let i = 0; i < string.length; i++) {
    if (!vcsMin.includes(string[i])) {
      newLetter += string[i];
    }
  }
  return newLetter;
}
