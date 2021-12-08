/*
Write a function that takes a non-empty string argument and returns the middle
character(s) of the string. If the string has an odd length, you should return
exactly one character. If the string has an even length, you should return
exactly two characters.
*/

function centerOf(string) {
  if (string.length % 2 === 1) {
    let half = string.length / 2;
    return string.slice(half, half + 1);
  } else {
    let half = string.length / 2;
    return string.slice(half - 1, half + 1);
  }
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));
