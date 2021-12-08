// Write a function that takes a number as an argument. If the argument is a
// positive number, return the negative of that number. If the argument is a
// negative number, return it as-is.

function negative(number) {
  if (Math.sign(number) === 1 || number === 0) {
    return number * -1;
  } else {
    return number;
  }
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));
