// Write a function that takes a string consisting of zero or more space
// separated words and returns an object that shows the number of words of
// different sizes.

/*

P:

Input: An array
Output: An object


E:

wordSizes('Four score and seven.');
// { "3": 1, "4": 1, "5": 1, "6": 1 }

wordSizes('Hey diddle diddle, the cat and the fiddle!');
// { "3": 5, "6": 1, "7": 2 }

wordSizes("What's up doc?");
// { "2": 1, "4": 1, "6": 1 }

wordSizes('');
// {}


D:

Arrays
Objects
Strings
Numbers


A:

1. Declare variable words and initialize to passed in string split.
2. Declare variable result and initialze to empty object.
3. Declare variable wordLengths and initialze to empty array.
4. Loop through words array:
  - Each loop, push the word.length converted to string to wordLengths.
5. Loop through wordLengths.
  - Each loop, check if the current element exists as a property on result.
    - If no, add current element as a property and set its key to 1.
    - If yes, add 1 to the key of the current elements property.
6. Return result.


C:

*/

function wordSizes(string) {
  let words = string.split(' ');
  let result = {};
  let wordLengths = [];

  if (string.length === 0) {
    return result;
  }

  words.forEach((word) => wordLengths.push(String(word.length)));

  wordLengths.forEach((prop) => {
    if (result.hasOwnProperty(prop)) {
      result[prop] += 1;
    } else {
      result[prop] = 1;
    }
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));
