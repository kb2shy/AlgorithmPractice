// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const newStrA = cleanString(stringA);
  const newStrB = cleanString(stringB);
  return newStrA === newStrB;
}

const cleanString = (str) => {
  return str.replace(/[^\w]/g,'').toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const objA = reduceToObject(stringA);
//   const objB = reduceToObject(stringB);
//   if (Object.keys(objA).length !== Object.keys(objB).length) {
//     return false;
//   }
//   return isEquivalent(objA, objB);
// }
//
// const isEquivalent = (obj1, obj2) => {
//   const arr1 = Object.keys(obj1);
//   for (let char of arr1) {
//     if (obj1[char] !== obj2[char]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// const reduceToObject = (string) => {
//   const obj = {};
//   for (let char of string.replace(/[^\w]/g,'').toLowerCase()) {
//     obj[char] = obj[char] + 1 || 1;
//   }
//   return obj;
// }
