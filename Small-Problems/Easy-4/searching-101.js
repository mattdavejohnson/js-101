// Write a program that solicits six numbers from the user and logs a message
// that describes whether the sixth number appears among the first five numbers.

/*

P:

Input: Strings
Output: String


E:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.


D:

Strings
Numbers
Arrays


A:

1. Declare variable array and initialize it to an empty array.
2. Ask user for 5 numbers.
  - For each number:
    - Convert the string to number.
    - Add number to the array.
3. Ask user for 1 number.
  - Convert string to number
  - Check if number is in the array.
4. Return appropriate string stating whether or not the last number appears.


C:

*/

const readline = require('readline-sync');
let testArray = [];

let num1 = readline.question('Enter the 1st number: ');
testArray.push(Number(num1));

let num2 = readline.question('Enter the 2nd number: ');
testArray.push(Number(num2));

let num3 = readline.question('Enter the 3rd number: ');
testArray.push(Number(num3));

let num4 = readline.question('Enter the 4th number: ');
testArray.push(Number(num4));

let num5 = readline.question('Enter the 5th number: ');
testArray.push(Number(num5));

let num6 = readline.question('Enter the last number: ');

if (testArray.includes(Number(num6))) {
  console.log(`The number ${num6} appears in ${testArray}.`);
} else {
  console.log(`The number ${num6} does not appear in ${testArray}.`);
}
