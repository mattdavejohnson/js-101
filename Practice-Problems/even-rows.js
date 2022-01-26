/*

Imagine a sequence of consecutive even integers beginning with 2.
The integers are grouped in rows, with the first row containing one
integer, the second row two integers, the third three integers, etc.
Given an integer representing the number of a particular row, return
an integer representing the sum of all the integers in that row.


PROBLEM:

Input: An integer which represents a row
Output: An integer which is the sum of integers in the row

Explicit Requirements:

- Given an integer representing the number of a row
- Each row contains integers
  - The integers are all even and consecutive beginning with 2
- Each row number contains that amount of integers
  - Row 1 contains 1 integer, row 2 contains 2 integers, etc.
- The rows get incrementally larger: 1, 2, 3, etc.

Implicit Requirements:


If input is 3, output is 30

1: 2
2: 4, 6
3: 8, 10, 12
4: 14, 16, 18, 20
5: 22, 24, 26, 28, 30


EXAMPLES:

row: 1 --> sum of ints in row: 2
row: 2 --> sum of ints in row: 10
row: 4 --> sum of ints in row: 68


DATA STRUCTURE/ALGORITHM:

Integer --> Array --> Integer

input is 3:

[
  [2],
  [4, 6],
  [8, 10, 12],
  ...
]

- Create rows up to input number
- Once at the input numbers row, sum that row

- START integer
- DECLARE 'rows' and initialize to an empty array
- DECLARE 'currentNumber' and initialize to 2
- ITERATE from 0 to input number - 1
  - ADD subarray to 'rows'
  - ITERATE from 0 to outer index
    - ADD 'currentNumber' to subarray at outer index of 'rows'
    - REASSIGN 'currentNumber' to 'currentNumber' + 2
- RETURN the return value of adding all integers in subarray at input number - 1
  of 'rows'

*/

function evenRows(number) {
  let rows = [];
  let currentNumber = 2;

  for (let index = 0; index < number; index += 1) {
    rows.push([]);
    for (let secondIndex = 0; secondIndex <= index; secondIndex += 1) {
      rows[index].push(currentNumber);
      currentNumber += 2;
    }
  }

  return rows[number - 1].reduce((acc, curr) => acc + curr);
}

console.log(evenRows(1));
console.log(evenRows(2));
console.log(evenRows(4));
