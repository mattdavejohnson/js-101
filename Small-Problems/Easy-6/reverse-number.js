// Write a function that takes a positive integer as an argument and returns
// that number with its digits reversed.

function reverseNumber(number) {
  let arrayNum = String(number).split('').reverse().join('');
  return Number(arrayNum);
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));
