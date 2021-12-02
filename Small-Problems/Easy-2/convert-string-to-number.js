// Write a function that takes a string of digits and returns the
// appropriate number as an integer. You may not use any of the methods
// mentioned above.

/*

P:

Input: A string of digits.
Output: An integer.


E:

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


D:


A:

1. Declare total variable and initialize to 0.
2. Declare a const variable and initialze it to an object with values.
3. Split the passed in string into an array.
4. Map the array to replace the string values with int values.
5. Loop through the mapped array.
  - Each loop, set total equal to the previous (total * 10) + the current
    array value.
6. Return total.

C:

*/

function stringToInteger(str) {
  const CONVERT = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  let total = 0;
  let digits = str.split('').map((element) => CONVERT[element]);
  // eslint-disable-next-line no-mixed-operators
  digits.forEach((element) => (total = total * 10 + element));
  return total;
}

console.log(stringToInteger('4321') === 4321);
console.log(stringToInteger('570') === 570);
