// Write a program that prompts the user for two positive integers, and then
// prints the results of the following operations on those two numbers:
// addition, subtraction, product, quotient, remainder, and power.

/*

P:

Input: Two positive integers.
Output: Strings that print the results of the operations.


E:

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23


D:

None.


A:

1. Accept two positive integers from the user.
2. Perform the needed operations on the integers and save each result
in a variable.
3. Log each result.


C:

*/

const readline = require('readline-sync');

let firstNumber = readline.question('Enter the first number:\n');
let secondNumber = readline.question('Enter the second number:\n');

function operations(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);

  let add = num1 + num2;
  console.log(`${num1} + ${num2} = ${add}`);

  let sub = num1 - num2;
  console.log(`${num1} - ${num2} = ${sub}`);

  let mult = num1 * num2;
  console.log(`${num1} * ${num2} = ${mult}`);

  let divide = num1 / num2;
  console.log(`${num1} / ${num2} = ${Math.floor(divide)}`);

  let remainder = num1 % num2;
  console.log(`${num1} % ${num2} = ${remainder}`);

  let power = num1 ** num2;
  console.log(`${num1} ** ${num2} = ${power}`);
}

operations(firstNumber, secondNumber);
