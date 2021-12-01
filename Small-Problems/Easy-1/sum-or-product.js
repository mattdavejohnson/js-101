// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product of
// all numbers between 1 and the entered integer, inclusive.

/*

P:

Input: An integer greater than 0 and either 's' or 'p' for sum or product.
Output: A string that contains the total sum or product.

Ask the user for a number greater than 0, then ask to choose 's' for sum or
'p' for product.


E:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.


Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.


D:

An array to hold each number from 1 to the chosen number.


A:

1. Ask user for an integer greater than 0.
2. Ask user to enter 's' for sum or 'p' for product.
3. Create an array where each element is a number from 1 to chosen number.
4. Loop through the array and add or multiply each number together
using reduce, depending on user choice.
5. Log the results to the console.

C:

*/

const readline = require('readline-sync');

let userInt = readline.question('Please enter an integer greater than 0: ');
userInt = Number(userInt);

let userChoice = readline.question(
  'Enter "s" to compute the sum, or "p" to compute the product. '
);

let numbers = [];

for (let index = 1; index <= userInt; index++) {
  numbers.push(index);
}

if (userChoice === 's') {
  let sum = numbers.reduce((previous, current) => previous + current);

  console.log(`The sum of the integers between 1 and ${userInt} is ${sum}.`);
}

if (userChoice === 'p') {
  let product = numbers.reduce((previous, current) => previous * current);

  console.log(
    `The product of the integers between 1 and ${userInt} is ${product}.`
  );
}
