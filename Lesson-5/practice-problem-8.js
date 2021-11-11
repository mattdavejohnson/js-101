// Using forEach, write code to ouput all vowels from the strings in the
// arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = ['a', 'e', 'i', 'o', 'u'];

Object.values(obj).forEach((arr) => {
  arr
    .join('')
    .split('')
    .forEach((letter) => {
      if (vowels.includes(letter)) {
        console.log(letter);
      }
    });
});
