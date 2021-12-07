// Write a function that combines two arrays passed as arguments, and returns
// a new array that contains all elements from both array arguments, with
// each element taken in alternation.

/*

P:

Input: Two arrays
Output: An array


E:

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]


D:

Arrays
Numbers
Strings


A:

1. Declare variable mixed and initialize to an empty array.
2. Loop an amount equal to length of passed in arrays:
  - Push an item from array1 into mixed.
  - Push an item from array2 into mixed.
3. Return mixed.


C:

*/

function interleave(arr1, arr2) {
  let mixed = [];

  for (let index = 0; index < arr1.length; index += 1) {
    mixed.push(arr1[index]);
    mixed.push(arr2[index]);
  }

  return mixed;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
