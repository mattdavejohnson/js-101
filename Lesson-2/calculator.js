// 1. Ask user for two numbers. 2. Ask user for type of operation to perform.
// 3. Perform calculation and display result.

const MESSAGES = require('./calculator_messages.json');
const readline = (require('readline-sync'));

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' ||  Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

prompt(MESSAGES['firstNumber']);
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt(MESSAGES['validNumber']);
  number1 = readline.question();
}

prompt(MESSAGES['secondNumber']);
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(MESSAGES['validNumber']);
  number2 = readline.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is: ${output}`);