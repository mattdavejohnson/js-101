// Write a program that will ask for user's name. The program will then
// greet the user. If the user writes "name!" then the computer yells back
// to the user.

/*

P:

Input: A string
Output: A string


E:

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?


D:

None.


A:

1. Ask user for name and save in variable.
2. Check if the last character of the variable is '!'.
  - If yes:
    - Log all caps greeting.
  - If no:
    - Log normal greeting.


C:

*/

const readline = require('readline-sync');

let name = readline.question('What is your name? ');

if (name[name.length - 1] === '!') {
  console.log(
    `HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`
  );
} else {
  console.log(`Hello ${name}.`);
}
