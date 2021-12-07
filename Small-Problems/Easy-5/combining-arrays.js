// Write a function that takes two arrays as arguments and returns an array
// containing the union of the values from the two.

/*

P:

Input: An array
Output: An array


E:

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]


D:

Arrays
Numbers


A:

1. Declare variable mix and initiailze to copy of first passed in array.
2. Loop through second passed in array:
  - Check if current element exists in mix.
    - If no, push element to mix.
3. Return mix.


C:

*/

function union(arr1, arr2) {
  let mix = arr1.slice();

  arr2.forEach((number) => {
    if (!mix.includes(number)) {
      mix.push(number);
    }
  });

  return mix;
}

console.log(union([1, 3, 5], [3, 6, 9]));
