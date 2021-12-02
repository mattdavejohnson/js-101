// write a function named xor that takes two arguments, and returns true
// if exactly one of its arguments is truthy, false otherwise.

/*

P:

Input: Two arguments, could be boolean or numbers.
Output: A boolean.


E:

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);


D:

None.


A:

1. Check if either of the arguments are truthy.
  - If no, return false.
  - If yes, check if both of the arguments are truthy.
    - If no, return true.
    - If yes, return false.


C:

*/

function xor(arg1, arg2) {
  if (arg1 || arg2) {
    if (arg1 && arg2) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
