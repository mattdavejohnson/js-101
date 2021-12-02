// Using the multiply() function from the "Multiplying Two Numbers" problem,
// write a function that computes the square of its argument.

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25);
console.log(square(-8) === 64);
