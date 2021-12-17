/* eslint-disable max-lines-per-function */
/*
Write a program that prints the longest sentence in a string based on the
number of words. Sentences may end with periods (.), exclamation points (!),
or question marks (?). You should treat any sequence of characters that are
not spaces or sentence-ending characters as a word. Thus, -- should count as
a word. Log the longest sentence and its word count to the console.
*/

/*

P:

Input: A string
Output: A string representing the longest sentence in the string argument and
a string stating how many words were in the longest sentence.

- Sentences may end with (.), (!), or (?).
- Any sequence of characters that are not spaces or sentence-ending characters
  count as words. Example '--' counts as a word.


E:

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.


D:

Strings
Arrays


A:


C:

*/

function longestSentence(string) {
  let strArr = string.split(' ');
  let resultArr = [];
  let ending = '.!?';
  let temp = [];

  for (let index = 0; index < strArr.length; index += 1) {
    let lastLetter = strArr[index].slice(-1);

    if (ending.includes(lastLetter)) {
      temp.push(strArr[index]);
      resultArr.push(temp);
      temp = [];
    } else {
      temp.push(strArr[index]);
    }
  }

  resultArr.sort((a, b) => b.length - a.length);
  let resultLength = resultArr[0].length;
  let resultString = resultArr[0].join(' ');

  console.log(
    `${resultString}\n\nThe longest sentence has ${resultLength} words.`
  );
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText =
  longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
longestSentence(longerText);
longestSentence("Where do you think you're going? What's up, Doc?");
longestSentence('To be or not to be! Is that the question?');
