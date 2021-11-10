// Compute and display the total age of the male members of the family

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' },
};

let totalAge = 0;

Object.keys(munsters).forEach((name) => {
  if (munsters[name].gender === 'male') {
    totalAge += munsters[name].age;
  }
});

console.log(totalAge);
