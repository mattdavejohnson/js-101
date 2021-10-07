// Create a new string that contains all lowercase letters except for
// the first character

let munstersDescription = "the Munsters are CREEPY and Spooky.";
let newMunsters = munstersDescription[0].toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(newMunsters);
