/* eslint-disable max-lines-per-function */

// Write a function that will take a short line of text, and write it to
//  the console log within a box.

function logInBox(string) {
  let outer = '+--+';
  let inner = '|  |';

  for (let index = 0; index < string.length; index++) {
    if (index === 0) {
      outer = '+--';
      inner = '|  ';
    } else if (index === string.length - 1) {
      outer += '--+';
      inner += '  |';
    } else {
      outer += '-';
      inner += ' ';
    }
  }

  console.log(outer);
  console.log(inner);
  console.log(`| ${string} |`);
  console.log(inner);
  console.log(outer);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
