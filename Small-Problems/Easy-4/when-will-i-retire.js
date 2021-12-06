// Build a program that logs when the user will retire and how many more
// years the user has to work until retirement.

/*

P:

Input: String
Output: String


E:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!


D:

Strings
Numbers


A:

1. Ask the user for their age.
  - Convert to number.
2. Ask the user the age they would like to retire.
  - Convert to number.
3. Declare variable today and initialze it to the Date object.
4. Declare variable currentYear and initialize it to today.getFullYear().
5. Declare variable remainingYears and initialize it to the result of
subtracting age from retire age.
6. Declare variable retirementYear and initialize it to the result of
adding remainingYears and currentYear.
7. Output correctly formated string.


C:

*/

const readline = require('readline-sync');

console.log('What is your age? ');
let age = Number(readline.prompt());

console.log('At what age would you like to retire? ');
let retireAge = Number(readline.prompt());

let today = new Date();
let currentYear = today.getFullYear();
let remainingYears = retireAge - age;
let retirementYear = currentYear + remainingYears;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You only have ${remainingYears} years of work to go!`);
