// Write a function that returns the number provided as an argument
// multiplied by two, unless the argument is a double number;
// otherwise, return the double number as-is.

/*

P:

Input: A number.
Output: A number.

If the number is an even-length and the left-side is exactly the same
as the right-side, return the number. If not, return the number multiplied
by 2.

E:

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676


D:

Numbers
Strings
Arrays


A:

1. Convert the number to a string and test its length.
  - If the string is odd:
    - Return the number * 2.
  - If the string is even:
    - Declare a variable and initialize it to an array where each element
    is the next character in the string, starting with the zero place.
2. Declare two variables, firstHalf and secondHalf.
  - Initialize firstHalf to a slice of the array that returns the first
  half, then join it.
  - Initialize secondHalf to a slice of the array that returns the second
  half, then join it.

3. Compare the equality of the two variables.
  - If equal, return the number.
  - If not equal, return the number * 2.

C:

*/

function twice(number) {
  let strNum = String(number);
  let length = String(number).length;

  if (length % 2 === 1) {
    return number * 2;
  }

  let arrNum = strNum.split('');
  let firstHalf = arrNum.slice(0, arrNum.length / 2).join('');
  let secondHalf = arrNum.slice(arrNum.length / 2).join('');

  if (firstHalf === secondHalf) {
    return number;
  }

  return number * 2;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));
