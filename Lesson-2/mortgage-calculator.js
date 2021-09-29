// Build a mortgage / car loan calculator

const readline = (require('readline-sync'));

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

// Info to get:
//   1. the loan amount
//   2. the APR
//   3. the loan duration

console.log('Welcome to Loan Calculator!');

console.log('Please enter the loan amount: ');

let loanAmount = readline.question();
while (isInvalidNumber(loanAmount)) {
  console.log('Must enter a positive number');
  loanAmount = readline.question();
}

console.log('Please enter the interest rate: ');

let interestRate = readline.question();
while (isInvalidNumber(interestRate)) {
  console.log('Must enter a positive number');
  interestRate = readline.question();
}

console.log('Please enter the loan duration in years: ');

let years = readline.question();
while (isInvalidNumber(years)) {
  console.log('Must enter a positive number');
  years = readline.question();
}

// convert APR to monthly interest rate and years to months

let annualInterestRate = Number(interestRate) / 100;
let monthlyInterestRate = annualInterestRate / 12;
let loanDurationInMonths = Number(years) * 12;

// Formula for monthly payments

let monthlyPayment = Number(loanAmount) * (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (-Number(loanDurationInMonths)))));

console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);