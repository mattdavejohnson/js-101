// Write a function that returns the next to last word in the String
// passed to it as an argument.

/*

P:

Input: A string of at least two words.
Output: The second to last word in the string.


E:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true


D:

An array to hold each word in the string.


A:

1. Split the string into an array and assign it to a variable.
2. Return the second to last word in the array.


C:

*/

function penultimate(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}

console.log(penultimate('last word') === 'last');
console.log(penultimate('Launch School is great!') === 'is');
