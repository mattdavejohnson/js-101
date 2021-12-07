// Write a function that takes one argument, a positive integer, and returns
// a list of the digits in the number.

function digitList(number) {
  let strNum = String(number);
  let result = [];

  for (let index = 0; index < strNum.length; index += 1) {
    result.push(Number(strNum[index]));
  }

  return result;
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));
