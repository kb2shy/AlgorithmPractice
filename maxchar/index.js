// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  let max = 0;
  let maxChar = '';
  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }
  return maxChar;
  // return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}

module.exports = maxChar;
