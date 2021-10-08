// Write two distinct ways of reversing an array without mutating the original
// array. Use reverse for first and sort for second

let numbers = [1, 2, 3, 4, 5];

numbers.slice().reverse();

[...numbers].sort((num1, num2) => num2 - num1);