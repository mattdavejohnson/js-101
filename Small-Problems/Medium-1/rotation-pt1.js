// Write a function that rotates an array by moving the first element to
// the end of the array. Do not modify the original array. If input is not an
// array, return undefined. If input is empty array, return an empty array.

/*

P:

Input: An array
Output: A new array, or undefined if input is not an array


E:

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]


D:

Arrays
Objects
Numbers
Strings


A:

1. Check if argument is an array.
  - If no, return undefined
2. Declare variable 'copy' and initialize to a slice of argument array.
3. Remove first element from 'copy' and then push that element to end of
'copy'.
4. Return 'copy'.


C:

*/

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  }

  let copy = array.slice();
  copy.push(copy.shift());
  return copy;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log(rotateArray(['a', 'b', 'c']));
console.log(rotateArray(['a']));
console.log(rotateArray([1, 'a', 3, 'c']));
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));
console.log(rotateArray([]));

console.log(rotateArray());
console.log(rotateArray(1));

let array = [1, 2, 3, 4];
console.log(rotateArray(array));
console.log(array);
