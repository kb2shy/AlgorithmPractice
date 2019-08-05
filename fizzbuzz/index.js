// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  const fb = { 3: "fizz", 5: "buzz", 15: "fizzbuzz" };
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log(fb[15]);
      continue;
    }
    if (i % 5 === 0) {
      console.log(fb[5]);
      continue;
    }
    if (i % 3 === 0) {
      console.log(fb[3]);
      continue;
    }
    console.log(i);
  }
}

module.exports = fizzBuzz;
