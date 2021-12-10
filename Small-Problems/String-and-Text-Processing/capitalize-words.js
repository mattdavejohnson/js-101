// Write a function that takes a string as an argument and returns that
// string with the first character of every word capitalized and all
// subsequent characters in lowercase.

function wordCap(string) {
  let strArr = string.split(' ');

  return strArr
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));
