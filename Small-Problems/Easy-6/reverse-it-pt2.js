/*
Write a function that takes a string argument containing one or more words and
returns a new string containing the words from the string argument. All
five-or-more letter words should have their letters in reverse order. The
string argument will consist of only letters and spaces. Words will be
separated by a single space.
*/

function reverseWords(string) {
  let strArray = string.split(' ');

  let resultTwo = strArray.map((word) => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });

  return resultTwo.join(' ');

  // let result = [];

  // strArray.forEach((word) => {
  //   if (word.length >= 5) {
  //     result.push(word.split('').reverse().join(''));
  //   } else {
  //     result.push(word);
  //   }
  // });

  // return result.join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));
