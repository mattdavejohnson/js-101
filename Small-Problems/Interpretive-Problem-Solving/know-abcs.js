/* eslint-disable max-lines-per-function */
/* eslint-disable id-length */
// Write a function that takes a word string as an argument and returns true
// if the word can be spelled using the set of blocks, false otherwise.

/*

P:

Input: A string
Output: A boolean. If the word conforms to the rules then return true.

Understand the Problem:

Given the following collection of spelling blocks:

B:O  X:K  D:Q  C:P  N:A  G:T  R:E  F:S  J:W  H:U  V:I  L:Y  Z:M

If the following rules apply to the passed in string, return true.

- Cannot use both letters from any given block.
- Can only use each block once.
- Ignore case.


E:

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true


D:

Arrays
Objects


A:

1. Declare variable 'letterBlocks' and initialize to object containing all
letter blocks.
2. Declare variable 'testArray' and initialize to empty array.
3. Loop through string argument. In each iteration:
  - Declare variable 'currentLetter' and initialize to the current letter
    lowercase.
  - Declare variable 'currentLetterBlock' and initialize to the current
    letter block looked up in 'letterBlocks' object.
  - Check if the 'currentLetterBlock' exists in 'testArray'.
    - If no, push 'currentLetterBlock' to 'testArray'.
    - If yes, return false.
4. Return true.


C:

 */

function isBlockWord(word) {
  let letterBlocks = {
    a: 'na',
    b: 'bo',
    c: 'cp',
    d: 'dq',
    e: 're',
    f: 'fs',
    g: 'gt',
    h: 'hu',
    i: 'vi',
    j: 'jw',
    k: 'xk',
    l: 'ly',
    m: 'zm',
    n: 'na',
    o: 'bo',
    p: 'cp',
    q: 'dq',
    r: 're',
    s: 'fs',
    t: 'gt',
    u: 'hu',
    v: 'vi',
    w: 'jw',
    x: 'xk',
    y: 'ly',
    z: 'zm',
  };

  let testArray = [];

  for (let index = 0; index < word.length; index += 1) {
    let currentLetter = word[index].toLowerCase();
    let currentLetterBlock = letterBlocks[currentLetter];

    if (testArray.includes(currentLetterBlock)) {
      return false;
    } else {
      testArray.push(currentLetterBlock);
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));
console.log(isBlockWord('floW'));
console.log(isBlockWord('APPLE'));
console.log(isBlockWord('apple'));
console.log(isBlockWord('apPLE'));
console.log(isBlockWord('Box'));
