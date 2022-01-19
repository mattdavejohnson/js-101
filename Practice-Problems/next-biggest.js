// Given a positive integer number, return the next biggest number formed by
// the same digits. If no bigger number can be composed, return -1.

function sameDigits(num1, num2) {
  num1 = String(num1).split('').sort().join('');
  num2 = String(num2).split('').sort().join('');

  return num1 === num2;
}

function highestNum(num) {
  let numArr = String(num).split('');

  if (numArr.length === 1) {
    return -1;
  }

  for (let index = 0; index < numArr.length - 2; index += 1) {
    for (let index2 = index + 1; index2 < numArr.length - 1; index2 += 1) {
      let first = Number(numArr[index]);
      let second = Number(numArr[index2]);

      if (second > first) {
        return false;
      }
    }
  }

  return true;
}

function nextBiggerNum(num) {
  if (highestNum(num)) {
    return -1;
  }

  let compare = num;

  while (true) {
    compare += 1;

    if (sameDigits(num, compare)) {
      return compare;
    }
  }
}

console.log(nextBiggerNum(1234) === 1243);
console.log(nextBiggerNum(2017) === 2071);
console.log(nextBiggerNum(123444) === 124344);
console.log(nextBiggerNum(9) === -1);
console.log(nextBiggerNum(111) === -1);
console.log(nextBiggerNum(531) === -1);
console.log(nextBiggerNum(123456789) === 123456798);
console.log(nextBiggerNum(124566) === 124656);
console.log(nextBiggerNum(516265) === 516526);
