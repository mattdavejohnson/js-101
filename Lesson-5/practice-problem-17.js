// Write a function that takes no arguments and returns a string that contains
// a UUID.

function codeMaker() {
  let code = '';
  let characters = '0123456789abcdef';
  let sections = [8, 13, 18, 23];

  function randomNumber() {
    return Math.floor(Math.random() * characters.length);
  }

  for (let index = 0; index < 36; index += 1) {
    if (sections.includes(index)) {
      code += '-';
    } else {
      code += characters[randomNumber()];
    }
  }

  return code;
}

console.log(codeMaker());
