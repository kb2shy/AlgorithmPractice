// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n);
  let reverseN = 0;
  n = Math.abs(n);
  while (n) {
    reverseN = (reverseN * 10) + (n % 10);
    n = Math.floor(n / 10);
  }
  return reverseN * sign;
}

module.exports = reverseInt;
