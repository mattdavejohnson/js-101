/*
Write a function that takes an array as an argument and sorts that array
using the bubble sort algorithm described above. The sorting should be done
"in-place" — that is, the function should mutate the array.
*/

/*

P:

Input: An array
Output: The array argument sorted least to greatest.

Implement bubble sort algorithm in-place.


E:

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


D:

Arrays


A:

1. Create while loop and set condition to true.
  - Declare variable 'swaps' and initialize to 0.
  - Loop through array argument:
    - Declare variable 'first' and initialize to array[index].
    - Declare variable 'second' and initialize to array[index + 1].
    - If first > second:
      - array[index] = second
      - array[index + 1] = first
      - swaps += 1
  - If swaps > 0:
    - If true continue
    - If false break
2. Return array argument.

C:

*/

function bubbleSort(array) {
  while (true) {
    let swaps = 0;

    for (let index = 0; index < array.length - 1; index += 1) {
      let first = array[index];
      let second = array[index + 1];

      if (first > second) {
        array[index] = second;
        array[index + 1] = first;
        swaps += 1;
      }
    }

    if (swaps > 0) {
      continue;
    } else {
      break;
    }
  }

  return array;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);
