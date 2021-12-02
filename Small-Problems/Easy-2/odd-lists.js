// Write a function that returns an Array that contains every other
// element of an Array that is passed in as an argument.

/*

P:

Input: An array.
Output: A filtered array.


E:

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []


D:

Arrays


A:

1. Declare a variable and initialize it to an empty array.
2. Loop through the passed in array.
  - Push every other element into the empty array.
3. Return the filtered array.


C:

*/

function oddities(arr) {
  let filtered = [];

  for (let index = 0; index < arr.length; index++) {
    if (index % 2 === 0) {
      filtered.push(arr[index]);
    }
  }

  return filtered;
}

console.log(oddities([2, 3, 4, 5, 6]));
console.log(oddities([1, 2, 3, 4, 5, 6]));
console.log(oddities(['abc', 'def']));
console.log(oddities([123]));
console.log(oddities([]));
