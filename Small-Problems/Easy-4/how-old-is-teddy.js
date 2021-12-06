// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 120 (inclusive).

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let num = Math.floor(Math.random() * (max - min));
  return num + min;
}

console.log(`Teddy is ${randomNumber(20, 121)} years old!`);
