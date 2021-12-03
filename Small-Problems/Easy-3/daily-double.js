// Write a function that takes a string argument and returns a new string
// that contains the value of the original string with all consecutive
// duplicate characters collapsed into a single character.

/*

P:

Input: A string
Output: A string


E:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""


D:

None.


A:

1. Declare finished variable and initialize it to ''.
2. Loop through the given string.
3. For each letter in the string, compare it with the previous letter.
  - If they are equal, continue.
  - If they are not equal, reassign finished variable to add current letter.
4. Return finished variable.

C:

*/

function crunch(string) {
  let finished = '';

  for (let index = 0; index < string.length; index++) {
    if (index === 0) {
      finished = string[0];
      continue;
    } else if (string[index] === string[index - 1]) {
      continue;
    } else {
      finished += string[index];
    }
  }

  return finished;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));
