// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const newArray = str.split(" ");
  let newString = "";
  for (let word of newArray) {
    newString += word.substring(0,1).toUpperCase() + word.substring(1) + " ";
  }
  return newString.trim();
}

module.exports = capitalize;
