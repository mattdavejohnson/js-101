/*
Create a function that takes 2 arguments, an array and an object.
The array will contain 2 or more elements that, when combined with
adjoining spaces, will produce a person's name. The object will contain
two keys, "title" and "occupation", and the appropriate values.
Your function should return a greeting that uses the person's full name,
and mentions the person's title.
*/

/*

P:

Input: An array of strings and an object.
Output: A string.

Join the stirngs of the given array along with the the title and occupation
properties of the given object to return the greeting string.


E:

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.


D:

An array of strings and an object with two properties with string values.


A:

1. Join the strings in the array into a single string.
  - Save in variable.
2. Add the 'title' property and the 'occupation' property values to the string.
  - Save both in variables.
3. Return the complete string.


C:

*/

function greetings(array, object) {
  let name = array.join(' ');
  let title = object['title'];
  let occupation = object['occupation'];

  return `Hello, ${name}! Nice to have a ${title} ${occupation} around.`;
}

console.log(
  greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
);
