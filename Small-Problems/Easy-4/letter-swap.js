// Given a string of words separated by spaces, write a function that swaps
// the first and last letters of every word.

/*

P:

Input: A string
Output: A string


E:

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"


D:

Strings
Arrays


A:

1. Declare variable words and initialize to the passed in string split.
2. Loop through words array. Each loop:
  - Declare variable first and initialize to word[0];
  - Declare variable last and initialize to word[word.length - 1];
  - Declare variable middle and initialze to slice of word minus first and
  last letters.
  - Reassign words[index] = last + middle + first.
3. Return words joined


C:

*/

function swap(string) {
  let words = string.split(' ');

  // for (let [index, word] of words.entries()) {
  //   if (word.length === 1) {
  //     continue;
  //   }

  //   let first = word[0];
  //   let last = word[word.length - 1];
  //   let middle = word.slice(1, word.length - 1);

  //   words[index] = last + middle + first;
  // }

  words.forEach((word, index) => {
    if (word.length === 1) {
      return;
    }

    let first = word[0];
    let last = word[word.length - 1];
    let middle = word.slice(1, word.length - 1);

    words[index] = last + middle + first;
  });

  return words.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));
