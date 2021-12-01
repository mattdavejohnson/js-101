// Write a function that takes one integer argument, which may be positive,
// negative, or zero. This method returns true if the number's absolute value
// is odd. You may assume that the argument is a valid integer value.

/*

P:

Input: One integer argument that is positive, neg, or zero.
Output: Returns true if the number's absolute value is odd. Returns false
if positive or zero.


E:

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true


D:

None.


A:

1. Accept a single parameter that is a number.
2. Use Math.abs() to get the absolute value of the number.
3. Determine through remainder operator if the number is odd.
  - If number is odd, return true.
  - If number is even or zero, return false.

C:

*/

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
