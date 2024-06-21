/**
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true, false, false, true, true,  true,  true,  true, false, false, true, true] output should be 17 true.

mi solucion:
 */

function countSheeps(arrayOfSheep) {
  let countOfSheep = 0;

  for (let i = 0; i < arrayOfSheep.length; i++)
    if (arrayOfSheep[i] === true) countOfSheep += 1;

  return countOfSheep;
}
