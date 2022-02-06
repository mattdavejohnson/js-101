/*
Stop Spinning My Words

Write a function that takes in a string of one or more words, and returns
the same string, but with all five or more letter words reversed.


PROBLEM:
===================

Input: A string
Output: A string

Explicit Requirements:
- Return a string with all the words in the original string that are 5 or
  more letters reversed
- Strings passed in will only have letters and spaces
- Case of letters should be retained
- If no words are five or more letters, return the original string

EXAMPLES:
===================

spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw"
spinWords("This is a test") => returns "This is a test"
spinWords("This is another test") => returns "This is rehtona test"


DATA STRUCTURES/ALGORITHM:
===================

String ==> Array ==> String


- START string
- DECLARE 'stringArray' and initialize to string arg split into an array
  of words
- DECLARE 'reversedWords' and initialize to calling map on 'stringArray'
  - ITERATE through each word of 'stringArray'
    - If word is length 5 or longer
      - TRANSFORM word into its reverse
    - If word is less than length 5
      - Do nothing to word
- RETURN 'reversedWords' joined as a string

*/

function spinWords(string) {
  let stringArray = string.split(' ');
  let reversedWords = stringArray.map((word) => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });

  return reversedWords.join(' ');
}

console.log(spinWords('Hey fellow warriors'));
console.log(spinWords('This is a test'));
console.log(spinWords('This is another test'));
