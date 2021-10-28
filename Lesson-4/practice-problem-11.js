// Create an object that expresses the frequency with which each letter
// occurs in the following string

let statement = "The Flintstones Rock";

function howMany(words) {
  let letterObject = {};
  let letters = words.split('');

  for (let index = 0; index < letters.length; index += 1) {
    if (letters[index] === ' ') {
      continue;
    }

    if (letterObject.hasOwnProperty(letters[index])) {
      letterObject[letters[index]] += 1;
    } else {
      letterObject[letters[index]] = 1;
    }
  }

  return letterObject;
}

let totals = howMany(statement);

console.log(totals);