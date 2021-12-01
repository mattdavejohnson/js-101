// Create a simple tip calculator. The program should prompt for a bill
// amount and a tip rate. The program must compute the tip, and then log
// both the tip and the total amount of the bill to the console.

/*

P:

Input: Two numbers, one to represent the bill amount and one to represent
the tip percentage.
Output: Two strings.


E:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00


D:

None.


A:

1. Ask the user for the bill total.
  - Convert the input string into a number.
2. Ask the user for the tip percentage.
  - Convert the input string into a number.
  - Divide number by 100 to get decimal representing percentage.
3. Multiply the bill total with the decimal percentage.
  - Log this to the console.
4. Add the tip and the bill total.
  - Log this to the console.

C:

*/

const readline = require('readline-sync');

let bill = readline.question('What is the bill?\n');
bill = Number(bill);

let tip = readline.question('What is the tip percentage?\n');
tip = Number(tip / 100);

let tipTotal = bill * tip;
console.log(`The tip is $${tipTotal.toFixed(2)}`);

let billTotal = bill + tipTotal;
console.log(`The total is $${billTotal.toFixed(2)}`);
